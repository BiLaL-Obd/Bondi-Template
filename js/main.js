// Icon Button
let icon = document.querySelector(".navbar .navbar-toggler");
let links = document.querySelector(".navbar .collapse");
let navbar = document.querySelector(".navbar");
let allLinks = document.querySelectorAll(".navbar .collapse li");
allLinks.forEach((li) => {
  li.addEventListener("click", () => {
    document
      .querySelector(".navbar .collapse .active")
      .classList.remove("active");
    li.children[0].classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target != navbar && e.target != icon) {
    if (links.classList.contains("show")) {
      links.classList.remove("show");
    }
  }
});
navbar.onclick = (e) => {
  e.stopPropagation();
};

// Window Scroll
window.onscroll = function () {
  if (window.scrollY >= 250) {
    if (links.classList.contains("show")) {
      links.classList.remove("show");
    }
  }
};

// Search Button
let search = document.querySelector(".navbar .search");
let searchSection = document.querySelector(".search-section");
search.onclick = () => {
  searchSection.classList.toggle("show");
};
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    if (searchSection.classList.contains("show")) {
      searchSection.classList.remove("show");
    }
  }
});

// Portfolio Shuffle
let shuffles = document.querySelectorAll(".portfolio .shuffle li");
let imgsShuffle = document.querySelectorAll(".portfolio .row .image");
shuffles.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

function removeActive() {
  document.querySelector(".shuffle .active").classList.remove("active");
  this.classList.add("active");
}
function manageImgs() {
  imgsShuffle.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.port).forEach((el) => {
    el.style.display = "block";
  });
}
