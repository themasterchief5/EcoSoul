document.addEventListener("DOMContentLoaded", () => {
  const tgl = document.querySelector(".menu-tgl");
  const nav = document.querySelector(".nav");

  tgl.addEventListener("click", () => {
    console.log("Toggle clicked");
    nav.classList.toggle("active");
  });
});

document.querySelector(".active-page").addEventListener("click", e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400 && window.innerWidth > 768) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
