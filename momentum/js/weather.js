const API_KEY = "52191ecb30d99211bf8810256cc81f1f";

function onGeoFine(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const cityContainer = document.querySelector("#weather span:last-child");

      const city = data.name;
      const weather = data.weather[0].main;

      weatherContainer.innerText = weather;
      cityContainer.innerText = city;
    });
}

function onGeoError() {
  alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoFine, onGeoError);
