export const printWeather = (result, weather,countrie) => {
  let nameCity = weather.name;
  let tempCelsius = Math.round(weather.main.temp);
  let humidityW = weather.main.humidity;
  let minTemp = Math.round(weather.main.temp_min)
  let maxTemp = Math.round(weather.main.temp_max)
  let iconW = weather.weather[0].icon;
  let countrieS = countrie 
  let urlIcon = `http://openweathermap.org/img/wn/${iconW}@2x.png`;
  result.innerHTML = `<p>&nbsp${nameCity}, &nbsp${countrieS}</p>
                      <img src= ${urlIcon}>
                      <p>Temperatura Actual: ${tempCelsius}°</p>
                      <p>Humedad: ${humidityW}%</p>
                      <p>Min: ${minTemp}° &nbsp &nbsp- &nbsp &nbsp Max: ${maxTemp}°</p>
                    `;
};
