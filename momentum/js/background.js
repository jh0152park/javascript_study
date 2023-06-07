const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const image = images[getRandomInt(0, images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src = `./img/${image}`;
backgroundImage.classList.add("backgroundImage");
document.body.append(backgroundImage);
