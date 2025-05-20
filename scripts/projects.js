const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');

function openModal(card) {
  const title = card.dataset.title;
  const desc = card.dataset.desc;
  const img = card.dataset.img;

  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  modalImg.src = img;
  modalImg.alt = title;

  modal.style.display = 'flex';
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});
