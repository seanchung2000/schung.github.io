const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
function scroll() { 
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll");
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else { 
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
  }

window.addEventListener("scroll", () => { 
  if (lastScrollY < window.scrollY) {
    nav.classList.add("nav--hidden");
  } else { 
    nav.classList.remove("nav--hidden");
  }
  lastScrollY = window.scrollY;
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on the page load
reveal();