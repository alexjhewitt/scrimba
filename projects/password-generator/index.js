const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Stretch Goals:
// Starting length = 15 chars
// - Ability to change password length
// - Add copy on click
// - Toggle "symbols" and "numbers" on/off

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

passwordOne.addEventListener("click", (event) => {
  let password = passwordOne.textContent;
  copyPasswordToClipboard(password);
});

passwordTwo.addEventListener("click", (event) => {
  let password = passwordTwo.textContent;
  copyPasswordToClipboard(password);
});

function copyPasswordToClipboard(pwd) {
  if (!pwd) {
    console.log("field is empty");
    return;
  }
  navigator.clipboard
    .writeText(pwd)
    .then(() => {
      const messageElement = document.getElementById(
        "password-copied-notification"
      );

      messageElement.classList.add("show");

      setTimeout(() => {
        messageElement.classList.remove("show");
      }, 1500);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

function getRandomCharacter() {
  return Math.floor(Math.random() * characters.length);
}

function generateSinglePassword(length = 15) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[getRandomCharacter()];
  }
  return password;
}

function generatePasswords() {
  passwordOne.textContent = generateSinglePassword();
  passwordTwo.textContent = generateSinglePassword();
}
