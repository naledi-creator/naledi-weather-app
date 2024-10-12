function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".type-box");
  searchCity(searchInput.value);
}
let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit", searchSubmit);

function reloadWeather(response) {
  let temperatureElement = document.querySelector(".temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("h1");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "2188ffc414b4604d7f7e53b6abt0o00c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(reloadWeather);
}
