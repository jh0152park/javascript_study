const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const sayHello = document.querySelector("#hello");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");

  sayHello.innerText = "Hello" + username + "!";
  sayHello.classList.toggle("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
