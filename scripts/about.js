function animateCounters() {
  const counters = document.querySelectorAll('.count');
  counters.forEach(counter => {
    let target = +counter.getAttribute('data-target');
    let current = 0;
    let waitingTime = target <= 80 ? 100 : 30;
    let interval = setInterval(() => {

      const remaining = target - current;
      let increment = Math.ceil(remaining / waitingTime);
      current += increment;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }


      counter.innerText = current;
    }, waitingTime);
  });
}

function isInWidzenie(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}


window.addEventListener('scroll', () => {
  const impactSection = document.querySelector('.about-impact');
  if (impactSection && isInWidzenie(impactSection) && !impactSection.classList.contains('countedttt')) {
    animateCounters();
    impactSection.classList.add('countedttt');
  }
});

//Canvasy
window.addEventListener('load', () => {
  const canvas = document.getElementById('achievementsChart');
  const context = canvas.getContext('2d');
  const labels = ['Recycling (tons)', 'Cleanups', 'Workshops', 'Plantings (k)'];
  const values = [120, 95, 80, 110];

  const maxValue = Math.max(...values);
  const barWidth = 80;
  const gap = 30;
  const baseY = 280;
  const scale = 200 / maxValue;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#15131f';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.textAlign = 'center';

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const label = labels[i];
    const barHeight = value * scale;
    const x = gap + i * (barWidth + gap);
    const y = baseY - barHeight;

    context.fillStyle = '#653f96';
    context.fillRect(x, y, barWidth, barHeight);

    context.fillStyle = 'white';
    context.font = '14px Roboto, sans-serif';
    context.fillText(value, x + barWidth / 2, y - 10);
    context.fillText(label, x + barWidth / 2, baseY + 20);
  }
});

//Al Pacino
let typed = '';
const secret = 'alpacino';

window.addEventListener('keydown', e => {
  typed += e.key.toLowerCase();
  if (typed.length > secret.length) typed = typed.slice(-secret.length);
  if (typed === secret) {
    const bonus = document.getElementById('bonus');
    bonus.style.display = 'block';
    bonus.scrollIntoView({ behavior: 'smooth' });
    typed = '';
  }
});

