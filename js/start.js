document.addEventListener("DOMContentLoaded", function () {
  if (typeof window.addEventListener === "function") {
    var links = document.querySelectorAll("a[href^='#']");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    }
  }
});
