let cur = 0;
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let startX = 0;
let isDown = false;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('act'));
  slides[i].classList.add('act');
}

function nextSlide() {
  cur++;
  if (cur >= slides.length) cur = 0;
  showSlide(cur);
}

function prevSlide() {
  cur--;
  if (cur < 0) cur = slides.length - 1;
  showSlide(cur);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

const slider = document.querySelector('.slider');

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.clientX;
});

document.addEventListener('mouseup', e => {
  if (!isDown) return;
  isDown = false;
  let endX = e.clientX;
  if (endX - startX > 50) prevSlide();
  else if (startX - endX > 50) nextSlide();
});

slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) prevSlide();
  else if (startX - endX > 50) nextSlide();
});

setInterval(nextSlide, 10000);
showSlide(cur);
