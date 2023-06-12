const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.lineWidth = 2;

function onClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  context.lineTo(x, y);
  context.stroke();
}

canvas.addEventListener("click", onClick);
