const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
var isPainting = false;

canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;

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
}

function onMouseleave() {
  isPainting = false;
}

canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseleave);
