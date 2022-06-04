import { areValidInputs } from "./inputValidations.js";
import { printRequestedWeather } from "./callAPI.js";
import { printError } from "./inputErrorPrinter.js";

const location = document.querySelector("#location");
const countrie = document.querySelector("#countrie");
const form = document.querySelector("#form");
export const result = document.querySelector(".result_container");

window.addEventListener("load", () => {
  form.addEventListener("submit", getWeather);
});

export const activePreloader = () => {
  result.innerHTML = "<div class='preloader'>";
};

const getWeather = async (e) => {
  e.preventDefault();
  let locationValue = location.value;
  let countrieValue = countrie.value;
  if (areValidInputs(locationValue, countrieValue)) {
    activePreloader()
    printRequestedWeather(locationValue, countrieValue);
  }
  else {
    printError(result, locationValue, countrieValue);
  }
};
