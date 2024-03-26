// botão alteração de tema light-dark
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const rodape = document.getElementById("rodape-grad");
  const name = document.querySelector(".name-span");
  rodape.classList.toggle("gradient2");
  rodape.classList.toggle("gradient");
  name.classList.toggle("gradient2");
  name.classList.toggle("gradient");
});

// active navbar mobile
const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener("click", () => {
  const nav = document.getElementById("navbar-bs");
  nav.classList.toggle("active");
});