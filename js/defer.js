document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const rodape = document.getElementById("rodape-grad");
  const name = document.querySelector(".name-span");
  rodape.classList.toggle("gradient2");
  rodape.classList.toggle("gradient");
  name.classList.toggle("gradient2");
  name.classList.toggle("gradient");
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("navbar-bs");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
