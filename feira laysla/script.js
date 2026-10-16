/* ========================================
   CARTAS 3D (página inicial)
======================================== */

document.querySelectorAll(".carta").forEach((carta) => {
  carta.setAttribute("aria-pressed", "false");

  carta.addEventListener("click", () => {
    const virada = carta.classList.toggle("virada");
    carta.setAttribute("aria-pressed", String(virada));
  });
});