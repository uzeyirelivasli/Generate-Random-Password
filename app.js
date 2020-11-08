const text = document.querySelector(".pw");
const copy = document.querySelector("#copy-cl");
const pwLength = document.querySelector("#len");
const upper = document.querySelector("#upper");
const lower = document.querySelector("#lower");
const num = document.querySelector("#num");
const sym = document.querySelector("#sym");
const generate = document.querySelector(".btn-warning");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
const lowerLetters = "abcdefghijklmnopqruvwyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+=?/";

// // copy Clipboard it deost works
// copy.addEventListener("click", function copyText() {
//   text.select();
//   text.setSelectionRange(0, 99999);
//   document.execCommand("copy");
//   document.body.removeChild(text);

//   alert("Copied the text:" + text.value);
// });

function getUpperCase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowerCase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

let generatePassword = () => {
  const len = pwLength.value;
  let password = "";

  for (let i = 0; i < len; i++) {
    const x = generatex();
    password += x;
  }

  text.innerText = password;
};

function generatex() {
  const xs = [];

  if (upper.checked) {
    xs.push(getUpperCase());
  }

  if (lower.checked) {
    xs.push(getLowerCase());
  }

  if (num.checked) {
    xs.push(getNumbers());
  }

  if (sym.checked) {
    xs.push(getSymbols());
  }
  return xs[Math.floor(Math.random() * xs.length)];
}

generate.addEventListener("click", generatePassword);
