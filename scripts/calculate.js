const form = document.getElementById('carbon-form');
const result = document.getElementById('result');
const resetBtn = document.getElementById('reset-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const km = parseFloat(document.getElementById('transport').value) || 0;
    const meat = parseFloat(document.getElementById('meat').value) || 0;
    const flights = parseFloat(document.getElementById('flights').value) || 0;

    const footprint = (km * 0.2 + meat * 1.5 + flights * 250).toFixed(2);

    result.classList.add('brdr')
    result.innerHTML = `
        <h3>Your Estimated Annual CO₂ Emissions:</h3>
        <p><strong>${footprint} kg CO₂</strong></p>
        <p style="margin-top:10px;">Want to reduce it? Try walking more, eating plant-based meals, and limiting flights.</p>
      `;
});

resetBtn.addEventListener('click', () => {
    form.reset();
    result.classList.remove('brdr')
    result.innerHTML = '';
});

const maxVals = [20000, 100, 15]; //transport, meat, flights
const inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/-/g, '');

    const maxVal = maxVals[index];
    let num = parseFloat(input.value);
    if (!isNaN(num) && num > maxVal) {
      input.value = maxVal;
    }
  });
});
