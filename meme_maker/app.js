const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const line_width = document.getElementById("line_width");
const color = document.getElementById("color");
const color_option = Array.from(
  document.getElementsByClassName("color_option")
);
const mode_button = document.getElementById("mode_button");

let isPainting = false;
let isFilling = false;

canvas.width = 800;
canvas.height = 800;

context.lineWidth = line_width.value;

function onMousemove(event) {
  if (isPainting) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    return;
  }
  context.moveTo(event.offsetX, event.offsetY);
}

function onMousedown() {
  isPainting = true;
}

function onMouseup() {
  isPainting = false;
  context.beginPath();
}

function onMouseleave() {
  isPainting = false;
}

function onLineWidthChange(event) {
  context.lineWidth = event.target.value;
}

function onColorChange(event) {
  if (isFilling) {
    context.fillStyle = event.target.value;
  } else {
    context.strokeStyle = event.target.value;
  }
}

function onColorClick(event) {
  context.fillStyle = event.target.dataset.color;
  context.strokeStyle = event.target.dataset.color;
  color.value = event.target.dataset.color;
}

function onModeChange() {
  if (isFilling) {
    mode_button.innerText = "Fill";
  } else {
    mode_button.innerText = "Draw";
  }
  isFilling = !isFilling;
}

function onCanvasClick() {
  if (isFilling) {
    context.fillRect(0, 0, 800, 800);
  }
}

canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseleave);
canvas.addEventListener("click", onCanvasClick);

line_width.addEventListener("change", onLineWidthChange);

color.addEventListener("change", onColorChange);
color_option.forEach((color) => color.addEventListener("click", onColorClick));

mode_button.addEventListener("click", onModeChange);
