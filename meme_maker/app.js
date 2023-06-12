const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

context.fillRect(220, 200, 15, 100);
context.fillRect(380, 200, 15, 100);
context.fillRect(260, 200, 100, 100);

context.arc(310, 150, 40, 0, 360);
context.fill();

context.beginPath();
context.fillStyle = "white";
context.arc(290, 140, 8, 0, 360);
context.arc(330, 140, 8, 0, 360);
context.fill();

context.beginPath();
context.arc(310, 165, 15, 0, 1.0 * Math.PI);
context.fill();
