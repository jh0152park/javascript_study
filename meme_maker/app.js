const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const line_width = document.getElementById("line_width");
var isPainting = false;

canvas.width = 800;
canvas.height = 800;

context.lineWidth = line_width.value;

const COLORS = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff72",
  "#72fff5",
  "#18dcff",
  "#7d5fff",
];

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

canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseleave);

line_width.addEventListener("change", onLineWidthChange);
