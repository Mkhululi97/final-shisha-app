const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      // if (link.style.animation) {
      //   link.style.animation = "";
      // } else {
      //   link.style.animation = `navLinkFade0.5seaseforwards${index / 7 + 1}s`;
      // }
      link.style.opacity = 1;
    });
    burger.classList.toggle("toggle");
  });
};
navSlide();
