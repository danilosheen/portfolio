const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
dataSpyList.forEach((dataSpyEl) => {
  bootstrap.ScrollSpy.getInstance(dataSpyEl).refresh();
});
