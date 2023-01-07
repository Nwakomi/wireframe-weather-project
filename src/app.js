function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0&{hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0&{minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weatherDescription");
  let wind = document.querySelector("#wind");
  let sunrise = document.querySelector("#sunrise");
  let sunset = document.querySelector("#sunset");
  let humidity = document.querySelector("#humidity");
  let date = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  wind.innerHTML = Math.round(response.data.wind.speed);
  sunrise.innerHTML = response.data.sys.sunrise;
  sunset.innerHTML = response.data.sys.sunset;
  humidity.innerHTML = response.data.main.humidity;
  date.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
