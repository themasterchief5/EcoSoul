const Arrows = document.querySelectorAll('.arrow');
const leftArrow = Arrows[0];
const rightArrow = Arrows[1];
const dots = document.querySelectorAll('.dot');
const imgSide = document.querySelector('.img-side');
const images = [
  "url('../assets/woda.jpeg')",
  "url('../assets/forest.jpg')",
  "url('../assets/gory.png')",
  "url('../assets/river.webp')",
  "url('../assets/wheat.jfif')"
];

let cIndex = 2;

function updateSlider() {
  imgSide.style.backgroundImage = images[cIndex];

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  dots[cIndex].classList.add('active');
}

leftArrow.addEventListener('click', function () {
  cIndex -= 1;
  if (cIndex < 0) {
    cIndex = images.length - 1;
  }
  updateSlider();
});

rightArrow.addEventListener('click', function () {
  cIndex += 1;
  if (cIndex >= images.length) {
    cIndex = 0;
  }
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    cIndex = index;
    updateSlider();
  });
});

//Back baton
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', function () {
  window.location.href = '/index.html';
});
