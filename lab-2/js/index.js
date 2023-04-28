const name = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".registration-form");
const alertName = document.querySelector(".span-name");
const alertPassword = document.querySelector(".span-password");
const submitBtn = document.querySelector("button");

name.addEventListener("input", submitReg);
password.addEventListener("input", submitPassword);

email.addEventListener("input", checkInputs);
password.addEventListener("input", checkInputs);
name.addEventListener("input", checkInputs);

function submitReg(event) {
  event.preventDefault();

  if (name.value.length < 3 || name.value.length > 20) {
    alertName.classList.remove("hidden");
    return false;
  }
  alertName.classList.add("hidden");
  return true;
}

function submitPassword(event) {
  event.preventDefault();

  if (password.value.length < 6) {
    alertPassword.classList.remove("hidden");
    return false;
  }
  alertPassword.classList.add("hidden");
  return true;
}

function checkInputs() {
  if (
    name.value.length >= 3 &&
    email.value.trim() !== "" &&
    password.value.length > 6
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}
