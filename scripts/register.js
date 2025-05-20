//Password Eye
const eye = document.querySelector(".eye");
const password = document.getElementById("password");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    eye.style.stroke = "#a389f4";
    password.type = "text";
  } else {
    eye.style.stroke = "white";
    password.type = "password";
  }
});

//Name/Surname Capitalization
const nameI = document.getElementById("name")
const surnameI = document.getElementById("surname")
nameI.addEventListener("blur", function () {
  const val = this.value;
  if (val.length > 0) {
    this.value = val.charAt(0).toUpperCase() + val.slice(1);
  }
});
surnameI.addEventListener("blur", function () {
  const val = this.value;
  if (val.length > 0) {
    this.value = val.charAt(0).toUpperCase() + val.slice(1);
  }
});


//Name input
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');

nameInput.addEventListener('input', nameFormat);
surnameInput.addEventListener('input', nameFormat);
function nameFormat() {
  let value = this.value.replace(/[^a-zA-Ząćęłńóśżźàáèéêëìíîïóòóúüãñçâäåœ]/g, '');
  this.value = value;
}

//Country input
const countryPhoneCodes = {
  "Poland": "48",
  "USA": "01",
  "Germany": "49",
  "France": "33",
  "Spain": "34",
  "United Kingdom": "44"
};

const countryPostcodeFormats = {
  "Poland": /^\d{2}-\d{3}$/,
  "USA": /^\d{5}(-\d{4})?$/,
  "Germany": /^\d{5}$/,
  "France": /^\d{5}$/,
  "Spain": /^\d{5}$/,
  "United Kingdom": /^[A-Z]{1,2}\d{1,2} \d{1}[A-Z]{2}$/
};

const countryInput = document.getElementById('country');
let countryName = 'Poland';
countryInput.addEventListener('input', function () {
  countryName = this.value;
  updatePhoneNumber();
  updatePostcode();
});

//Postcode input
const postcodeInput = document.getElementById('postcode');
postcodeInput.addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '');

  if (countryName === 'Poland' && value.length > 5) {
    value = value.slice(0, 5);
  } else if (countryName === 'USA' && value.length > 9) {
    value = value.slice(0, 9);
  } else if (countryName === 'Germany' && value.length > 5) {
    value = value.slice(0, 5);
  } else if (countryName === 'United Kingdom' && value.length > 7) {
    value = value.slice(0, 7);
  } else if (countryName === 'France' || countryName === 'Spain') {
    if (value.length > 5) {
      value = value.slice(0, 5);
    }
  }

  if (countryName === 'Poland' && value.length > 2) {
    value = value.slice(0, 2) + '-' + value.slice(2);
  } else if (countryName === 'USA' && value.length > 5) {
    value = value.slice(0, 5) + '-' + value.slice(5);
  }

  postcodeInput.value = value;
});

//Phone input
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '').slice(0, 11);
  const countryCode = countryPhoneCodes[countryName] || '48';

  if (!value.startsWith(countryCode)) {
    value = countryCode + value;
  }

  this.value = `+${countryCode} ` + value.slice(countryCode.length).replace(/(\d{3})(?=\d)/g, '$1 ');
});

function updatePostcode() {
  const postcodeInput = document.getElementById('postcode');
  let value = postcodeInput.value.replace(/\D/g, '');

  if (countryName === 'Poland') {
    if (value.length > 5) value = value.slice(0, 5);
    if (value.length > 2) {
      value = value.slice(0, 2) + '-' + value.slice(2);
    }
  } else if (countryName === 'USA') {
    if (value.length > 9) value = value.slice(0, 9);
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
  } else if (countryName === 'Germany') {
    if (value.length > 5) value = value.slice(0, 5);
  } else if (countryName === 'United Kingdom') {
    if (value.length > 7) value = value.slice(0, 7);
  } else if (countryName === 'France' || countryName === 'Spain') {
    if (value.length > 5) value = value.slice(0, 5);
  }

  postcodeInput.value = value;
}

function updatePhoneNumber() {
  const phoneInput = document.getElementById('phone');
  let value = phoneInput.value.replace(/\D/g, '').slice(0, 11);
  const countryCode = countryPhoneCodes[countryName] || '48';

  if (!value.startsWith(countryCode)) {
    value = countryCode + value;
  }
  if (phoneInput.value != '') {
    phoneInput.value = `+${countryCode} `;
  }
}

//Email input
const emailInput = document.getElementById('email');

let allGood = true;

emailInput.addEventListener('blur', function () {
  const emailValue = emailInput.value;

  const monkeyIndex = emailValue.indexOf('@');
  const dotIndex = emailValue.indexOf('.', monkeyIndex);

  const isValid = (
    monkeyIndex > 0 &&
    dotIndex > monkeyIndex &&
    dotIndex !== -1 && dotIndex + 1 < emailValue.length
  );

  if (!isValid) {
    emailInput.style.border = '2px solid red';
    allGood = false;
  } else {
    emailInput.style.border = 'none';
    allGood = true;
  }
});

//Password validation
const pass = document.getElementById("password");
const inf = document.querySelector(".pass-info");
pass.addEventListener('input', function () {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  if (regex.test(pass.value)) {
    allGood = true;
    inf.style.display = "none";
  } else {
    allGood = false;
    inf.style.display = "block";
  }
});

//Form submit checking
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  if (!allGood) {
    e.preventDefault();
  }
});