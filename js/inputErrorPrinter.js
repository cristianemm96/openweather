import { activePreloader } from "./app.js";

const mkEmptyCountrieMsg = (result) => {
  activePreloader();
  setTimeout(() => (result.innerHTML = "<p>Ingrese un pais</p>"), 800);
}

const mkEmptyCityMsg = (result) => {
  activePreloader();
  setTimeout(() => (result.innerHTML = "<p>Ingrese una ciudad</p>"), 800);
}


export const printError = (result, location, countrie) => {
  if(!location && !countrie){

  }else 
  if (!location) {
    mkEmptyCityMsg(result);
  }else
  if (!countrie) {
    mkEmptyCountrieMsg(result);
  }
};



