document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  // Verifica se o tema atual é dark ou light e altera o link da folha de estilo correspondente
  var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  document
    .getElementById("theme")
    .setAttribute("href", "./css/style-" + theme + ".css");
});
