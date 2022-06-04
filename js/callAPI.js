import { result } from "./app.js";
import { printWeather } from "./weatherPrinter.js";
import { getCountrieCode } from "./countrieCodesMaker.js";
const key = "1f87d3f275ca40b5686bdfd98709d9b1";

export const printRequestedWeather = async (location, countrie) => {
  let countrieCode = getCountrieCode(countrie);
  if (countrieCode) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location},${countrieCode}&appid=${key}&units=metric`;
    try {
      let fetchedData = await fetch(url);
      let jsonData = await fetchedData.json();
      if (jsonData.cod == 404) {
        throw new Error("No hay resultados");
      } else {
        printWeather(result, jsonData, countrie)
      }
    } catch (e) {
     result.innerHTML = `<p>${e.message}</p>`
    }
  }
};
