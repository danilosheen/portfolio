// botão alteração de tema light-dark
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  saveTheme();
  aplicarCores();
});

function saveTheme() {
  const isDarkTheme = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

//Verificar tema e aplicar cores
function aplicarCores() {
  const isDarkTheme = document.body.classList.contains("dark-mode");
  const rodape = document.getElementById("rodape-grad");
  const name = document.querySelector(".name-span");
  const span = document.querySelectorAll(".span-size");

  span.forEach((element) => {
    element.classList.replace(
      element.classList[1],
      ("theme", isDarkTheme ? "gradient" : "gradient2")
    );
  });

  name.classList.replace(
    name.classList[3],
    ("theme", isDarkTheme ? "gradient" : "gradient2")
  );

  rodape.classList.replace(
    rodape.classList[1],
    isDarkTheme ? "gradient" : "gradient2"
  );
}

// Verificar e aplicar o tema atual ao carregar a página
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
  aplicarCores();
};

// active navbar mobile
const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener("click", () => {
  const nav = document.getElementById("navbar-bs");
  nav.classList.toggle("active");
});
