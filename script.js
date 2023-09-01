"use strict";

let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");
let counterResetElem = document.querySelector(".reset");

let count = 0;

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  if (count >= 7) {
    displayMessage("This counter counts only from 0 to 100");
    document.querySelector("body").style.backgroundColor = "#60b347";
    count = count;
  } else {
    count++;
    document.querySelector("body").style.backgroundColor = "#222";
  }
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  if (count <= 0) {
    displayMessage("This counter counts only from 0 to 100");
    document.querySelector("body").style.backgroundColor = "#60b347";
    count = count;
  } else {
    count--;
    document.querySelector("body").style.backgroundColor = "#222";
  }
  updateDisplay();
});

counterResetElem.addEventListener("click", () => {
  count = 0;
  updateDisplay();
  displayMessage("Count Now😃...");
  document.querySelector("body").style.backgroundColor = "#222";
});
