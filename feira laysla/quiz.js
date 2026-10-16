/* ========================================
   QUIZ: HIPERCONECTIVIDADE E SAÚDE MENTAL
   8 perguntas, 4 alternativas cada.
   A primeira alternativa de cada pergunta é a correta;
   a ordem é embaralhada a cada exibição.
======================================== */

const perguntas = [
  {
    pergunta: "1. Em que momento a hiperconectividade passa a ser considerada um problema?",
    respostas: [
      "Quando a conexão constante passa a prejudicar o sono, os estudos, as relações ou o bem-estar.",
      "Quando a pessoa usa a internet por mais de uma hora seguida em um dia.",
      "Quando a pessoa possui vários aparelhos eletrônicos em casa.",
      "Quando a pessoa usa redes sociais mais do que usa aplicativos de estudo."
    ],
    explicacao: "O problema não está no tempo exato nem na quantidade de aparelhos, mas no prejuízo que o uso causa à rotina e ao bem-estar."
  },
  {
    pergunta: "2. O que significa FOMO, muito associado às redes sociais?",
    respostas: [
      "A sensação de ansiedade por achar que outras pessoas estão vivendo algo que você está perdendo.",
      "O hábito de postar conteúdo com muita frequência para ganhar seguidores.",
      "O medo de ter os dados pessoais expostos na internet.",
      "A preferência por conversar somente por mensagens, e não pessoalmente."
    ],
    explicacao: "FOMO vem de “fear of missing out” (medo de ficar de fora) e leva a checar as redes o tempo todo."
  },
  {
    pergunta: "3. Por que usar telas logo antes de dormir pode atrapalhar o sono?",
    respostas: [
      "Os estímulos e a luz das telas mantêm o cérebro em alerta e podem atrasar o início do sono.",
      "Porque o celular emite um som que impede o corpo de relaxar, mesmo no modo silencioso.",
      "Porque só jogos eletrônicos afetam o sono; redes sociais e vídeos não têm efeito.",
      "Porque o uso de telas à noite só prejudica quem já tem dificuldade para dormir."
    ],
    explicacao: "Luz, conteúdos estimulantes e notificações deixam o cérebro ativo e podem adiar o sono, independentemente do tipo de conteúdo."
  },
  {
    pergunta: "4. O que costuma acontecer quando alternamos o tempo todo entre estudar e olhar notificações?",
    respostas: [
      "A atenção se fragmenta, e a tarefa tende a levar mais tempo e a exigir mais esforço.",
      "O cérebro se acostuma e a produtividade aumenta, pois fazemos duas coisas ao mesmo tempo.",
      "Nada muda, desde que cada interrupção dure menos de um minuto.",
      "A memória melhora, porque o cérebro fica mais estimulado."
    ],
    explicacao: "Cada interrupção exige um esforço para retomar o foco. A chamada multitarefa, na prática, é uma troca rápida de atenção."
  },
  {
    pergunta: "5. Por que ver somente os “melhores momentos” dos outros nas redes pode afetar a autoestima?",
    respostas: [
      "Porque leva a comparações com uma imagem editada e selecionada, que não mostra a vida real.",
      "Porque as redes sociais exibem apenas conteúdos negativos sobre a vida das pessoas.",
      "Porque a autoestima só é afetada por críticas diretas, e não por comparações.",
      "Porque a pessoa passa a se sentir sempre superior aos outros."
    ],
    explicacao: "As pessoas costumam publicar recortes escolhidos da própria vida. Comparar-se com eles pode gerar uma impressão distorcida."
  },
  {
    pergunta: "6. O que o termo “nomofobia” descreve?",
    respostas: [
      "O medo ou a ansiedade intensa de ficar sem o celular ou sem conexão.",
      "O medo de conhecer pessoas novas pela internet.",
      "O vício específico em jogos on-line.",
      "A sensação de que o celular vibrou quando, na verdade, não vibrou."
    ],
    explicacao: "Nomofobia vem de “no mobile phone phobia” e se refere ao desconforto de ficar sem o aparelho. Ainda não é um diagnóstico clínico oficial."
  },
  {
    pergunta: "7. Qual estratégia ajuda mais a reduzir distrações durante os estudos?",
    respostas: [
      "Silenciar as notificações e deixar o celular fora do alcance, em outro cômodo se possível.",
      "Deixar o celular virado para baixo ao lado do caderno, para resistir à tentação.",
      "Responder todas as mensagens rapidamente antes de começar, para não pensar nelas depois.",
      "Usar o celular como cronômetro e conferir as redes só um pouquinho a cada intervalo."
    ],
    explicacao: "Quanto mais longe e menos visível o aparelho estiver, menos ele disputa a atenção. Mesmo desligado ou virado para baixo, o celular ao alcance ainda atrai o olhar."
  },
  {
    pergunta: "8. Qual situação indica que pode ser hora de buscar apoio profissional?",
    respostas: [
      "Usar a internet de forma persistente, com prejuízo no sono, nos estudos ou nas relações, e sofrimento ao tentar reduzir.",
      "Passar um domingo chuvoso assistindo a séries e conversando com amigos on-line.",
      "Receber muitas notificações de grupos de mensagens da família ou da escola.",
      "Ficar um dia inteiro sem publicar nada nas redes sociais."
    ],
    explicacao: "O sinal de alerta é a combinação de uso persistente, prejuízo na rotina e dificuldade de reduzir, mesmo com tentativas. Conversar com alguém de confiança e com um profissional pode ajudar."
  }
];

const contador = document.getElementById("contador");
const pontos = document.getElementById("pontos");
const barra = document.getElementById("barraPreenchida");
const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const feedback = document.getElementById("feedback");
const proximo = document.getElementById("proximo");
const areaQuiz = document.getElementById("areaQuiz");
const resultado = document.getElementById("resultado");
const mensagemFinal = document.getElementById("mensagemFinal");
const reiniciar = document.getElementById("reiniciar");

let indiceAtual = 0;
let pontuacao = 0;
let respondida = false;
let opcoesAtuais = [];

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function mostrarPergunta() {
  respondida = false;

  const atual = perguntas[indiceAtual];

  contador.textContent =
    `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;

  pontos.textContent = `Pontos: ${pontuacao}`;

  barra.style.width =
    `${(indiceAtual / perguntas.length) * 100}%`;

  perguntaEl.textContent = atual.pergunta;
  respostasEl.replaceChildren();
  feedback.textContent = "";
  proximo.disabled = true;

  proximo.textContent =
    indiceAtual === perguntas.length - 1
      ? "Ver resultado"
      : "Próxima pergunta";

  // A alternativa de índice 0 é a correta; embaralha a ordem de exibição.
  opcoesAtuais = embaralhar(
    atual.respostas.map((texto, i) => ({ texto, correta: i === 0 }))
  );

  opcoesAtuais.forEach((opcao, indice) => {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className = "resposta";
    botao.textContent = opcao.texto;

    botao.addEventListener("click", () => {
      selecionarResposta(indice);
    });

    respostasEl.appendChild(botao);
  });
}

function selecionarResposta(indiceEscolhido) {
  if (respondida) return;

  respondida = true;

  const atual = perguntas[indiceAtual];
  const botoes = respostasEl.querySelectorAll(".resposta");

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (opcoesAtuais[indice].correta) {
      botao.classList.add("correta");
    } else if (indice === indiceEscolhido) {
      botao.classList.add("errada");
    }
  });

  if (opcoesAtuais[indiceEscolhido].correta) {
    pontuacao++;
    feedback.textContent = `Resposta correta! ${atual.explicacao}`;
  } else {
    feedback.textContent = `Não foi dessa vez. ${atual.explicacao}`;
  }

  pontos.textContent = `Pontos: ${pontuacao}`;

  barra.style.width =
    `${((indiceAtual + 1) / perguntas.length) * 100}%`;

  proximo.disabled = false;
}

function mostrarResultado() {
  areaQuiz.hidden = true;
  resultado.hidden = false;

  barra.style.width = "100%";
  contador.textContent = "Quiz concluído";
  pontos.textContent = `Pontos: ${pontuacao}`;

  const total = perguntas.length;

  if (pontuacao === total) {
    mensagemFinal.textContent =
      `Excelente! Você acertou ${pontuacao} de ${total} perguntas e demonstrou ótimo conhecimento sobre o tema.`;
  } else if (pontuacao >= 6) {
    mensagemFinal.textContent =
      `Muito bem! Você acertou ${pontuacao} de ${total} perguntas. Falta pouco para dominar o assunto.`;
  } else if (pontuacao >= 4) {
    mensagemFinal.textContent =
      `Bom começo! Você acertou ${pontuacao} de ${total} perguntas. Revise o conteúdo do site e tente de novo.`;
  } else {
    mensagemFinal.textContent =
      `Você acertou ${pontuacao} de ${total} perguntas. Leia o conteúdo do site com calma e tente novamente!`;
  }
}

proximo.addEventListener("click", () => {
  if (!respondida) return;

  if (indiceAtual < perguntas.length - 1) {
    indiceAtual++;
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

reiniciar.addEventListener("click", () => {
  indiceAtual = 0;
  pontuacao = 0;
  respondida = false;

  areaQuiz.hidden = false;
  resultado.hidden = true;

  mostrarPergunta();

  document.getElementById("quiz").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

mostrarPergunta();