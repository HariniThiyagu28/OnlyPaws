const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    document.body.style.overflow = "auto";

  }
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".intro__card", {
  ...scrollRevealOption,
  interval: 500,
});

// REVEAL every .about__row dynamically with alternating directions
document.querySelectorAll(".about__row").forEach((row, index) => {
  ScrollReveal().reveal(row, {
    ...scrollRevealOption,
    origin: index % 2 === 0 ? "left" : "right",
    reset: false,
    opacity: 0,
    scale: 1,
  });
});

// Close the menu when clicking anywhere outside or scrolling
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isMenuBtn = menuBtn.contains(event.target);

  if (!isClickInsideMenu && !isMenuBtn && navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
    document.body.style.overflow = "auto";
  }
});



ScrollReveal().reveal(".about__content span", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


ScrollReveal().reveal(".instagram__grid img", {
  duration: 1000,
  interval: 500,
});

document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.getElementById("userInput");
  const sendButton = document.getElementById("sendButton");

  if (chatInput && sendButton) {
    chatInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        sendButton.click();
      }
    });
  }
});

