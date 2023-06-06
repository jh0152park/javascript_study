const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const sayHello = document.querySelector("#hello");

const NAME = "username";
const HIDDEN_CLASS = "hidden";

const savedUsername = localStorage.getItem(NAME);

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);

  localStorage.setItem(NAME, username);
  printHello();
}

function printHello() {
  username = localStorage.getItem(NAME);
  sayHello.innerText = `Hello ${username}!`;
  sayHello.classList.remove(HIDDEN_CLASS);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  printHello();
}
