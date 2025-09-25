document.addEventListener("scroll", function () {
  const stickyATC = document.querySelector(".gempages-sticky-atc");
  if (stickyATC) {
    if (window.scrollY > 600) {
      stickyATC.classList.add("visible-atc");
    } else {
      stickyATC.classList.remove("visible-atc");
    }
  }
});
