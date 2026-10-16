/* ========================================
   ROLETA DO BEM-ESTAR
======================================== */

const roleta = document.getElementById("roletaCirculo");
const botaoGirar = document.getElementById("girarRoleta");
const tituloAtividade = document.getElementById("tituloAtividade");
const descricaoAtividade = document.getElementById("descricaoAtividade");
const atividadeEmoji = document.getElementById("atividadeEmoji");

const atividades = [
  {
    emoji: "🌬️",
    titulo: "Respire devagar",
    descricao: "Faça três respirações lentas e confortáveis, sem forçar."
  },
  {
    emoji: "🌷",
    titulo: "Imagine uma flor e uma vela",
    descricao: "Imagine cheirar uma flor e soprar uma vela suavemente."
  },
  {
    emoji: "💆",
    titulo: "Relaxe os ombros",
    descricao: "Levante os ombros suavemente e depois relaxe."
  },
  {
    emoji: "🖐️",
    titulo: "Contorne os dedos da mão",
    descricao: "Contorne os dedos da mão com o outro indicador, devagar."
  },
  {
    emoji: "👣",
    titulo: "Sinta seus pés no chão",
    descricao: "Perceba seus pés apoiados no chão por alguns instantes."
  },
  {
    emoji: "👀",
    titulo: "Observe cinco coisas",
    descricao: "Olhe ao redor e identifique cinco coisas que você consegue ver."
  },
  {
    emoji: "👂",
    titulo: "Escute três sons",
    descricao: "Preste atenção em três sons diferentes do ambiente."
  },
  {
    emoji: "🤲",
    titulo: "Relaxe as mãos",
    descricao: "Aperte as mãos suavemente e depois solte."
  },
  {
    emoji: "🦋",
    titulo: "Faça uma pausa acolhedora",
    descricao: "Se for confortável, abrace a si mesmo por alguns instantes."
  },
  {
    emoji: "🌈",
    titulo: "Encontre uma cor",
    descricao: "Encontre três objetos ao seu redor que tenham a mesma cor."
  },
  {
    emoji: "💭",
    titulo: "Repita uma frase positiva",
    descricao: "Pense: “Posso ir com calma, um passo de cada vez”."
  },
  {
    emoji: "🙆",
    titulo: "Espreguice suavemente",
    descricao: "Espreguice o corpo suavemente, respeitando seus limites."
  }
];

let girando = false;
let rotacaoAtual = 0;

botaoGirar.addEventListener("click", () => {
  if (girando) return;

  girando = true;
  botaoGirar.disabled = true;
  botaoGirar.textContent = "🎡 Girando...";

  tituloAtividade.textContent = "A roleta está girando!";
  descricaoAtividade.textContent =
    "Aguarde um instante para descobrir sua atividade.";

  atividadeEmoji.textContent = "✨";

  // Escolhe uma das 12 atividades.
  const indice = Math.floor(Math.random() * atividades.length);
  const atividade = atividades[indice];

  // Cada setor possui 30 graus.
  const grausPorSetor = 360 / atividades.length;
  const centroDoSetor =
    indice * grausPorSetor + grausPorSetor / 2;

  // Adiciona cinco voltas completas e alinha o setor sorteado ao ponteiro.
  // Subtrai a posição atual para o alinhamento ser correto em giros seguintes.
  const voltasExtras = 5 * 360;
  const posicaoAtual = ((rotacaoAtual % 360) + 360) % 360;
  const ajuste = (360 - centroDoSetor - posicaoAtual + 360) % 360;

  rotacaoAtual += voltasExtras + ajuste;
  roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

  window.setTimeout(() => {
    atividadeEmoji.textContent = atividade.emoji;
    tituloAtividade.textContent = atividade.titulo;
    descricaoAtividade.textContent = atividade.descricao;

    botaoGirar.disabled = false;
    botaoGirar.textContent = "✨ Girar novamente";

    girando = false;
  }, 3300);
});