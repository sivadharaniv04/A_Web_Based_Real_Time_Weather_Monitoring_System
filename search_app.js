let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
const key = "1e0f929f871779484f497c31e2c9850d";
let getWeather = () => {
  let cityValue = cityRef.value;
  if (cityValue.length == 0) {
    result.innerHTML = `<h2 class="msg">Please enter a city name</h2>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.main.temp);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.sys.country);
        result.innerHTML = `
        <img src="icons/${data.weather[0].icon}.png">
        <h1>${Math.floor(data.main.temp)} &#176;C</h1>
        <h3 class="desc">${data.weather[0].description}</h4>
        <h2>${data.name}, ${data.sys.country}</h2>   
        `;
      })
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);