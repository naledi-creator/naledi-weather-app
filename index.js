function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".type-box");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchInput.value;
}
let searchForElement = document.querySelector("#search-form");
searchForElement.addEventListener("submit", searchSubmit);
