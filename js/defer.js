document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  sections.forEach(function (section) {
    let rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      let id = section.getAttribute("id");
      document.querySelectorAll(".box-nav-item").forEach(function (item) {
        item.classList.remove("active");
      });
      document
        .querySelector('a[href="#' + id + '"]')
        .parentNode.parentNode.classList.add("active");
    }
  });
});
