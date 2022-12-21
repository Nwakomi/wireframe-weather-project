let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

let dateTime = document.querySelector(".dateTime");
dateTime.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h2 = document.querySelector("#h2");
  h2.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", search);

let city = "Münster";
let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
let h2 = city;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function showPosition() {
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${navigator.geolocation.getCurrentPosition.value}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#currentLocation");
button.addEventListener("click", getCurrentPosition);
