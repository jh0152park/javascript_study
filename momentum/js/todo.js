const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
let todoItems = [];

function deleteTodo(event) {
  li = event.target.parentNode;

  li.remove();
  todoItems = todoItems.filter((item) => item.id !== parseInt(li.id));
  localStorage.setItem("todo_list", JSON.stringify(todoItems));
}

function removeFilter(item, target) {
  return item.id !== target;
}

function printTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.addEventListener("click", deleteTodo);
  button.innerText = "✖";
  span.innerText = todo.text;
  li.id = todo.id;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const refresh = "";
  const todoItem = todoInput.value;

  todoInput.value = refresh;
  const item = {
    text: todoItem,
    id: Date.now(),
  };

  todoItems.push(item);
  localStorage.setItem("todo_list", JSON.stringify(todoItems));
  printTodo(item);
}

function printEachItem(items) {
  console.log(`This is ${items}`);
}

todoForm.addEventListener("submit", handleTodoSubmit);

items = localStorage.getItem("todo_list");
if (items !== null) {
  const parsedTodoList = JSON.parse(items);
  todoItems = parsedTodoList;
  parsedTodoList.forEach(printTodo);
}
