let language = "en";
const validLanguages = ["en", "es"];

function changeLanguage(newLang) {
  if (validLanguages.indexOf(newLang) > -1) {
    language = newLang;
    document.querySelector("html").setAttribute("lang", language);
    document.querySelector("#top").innerHTML = local[language].top;
    document.querySelector("#bottom").innerHTML = local[language].bottom;
    document.querySelector("#link").innerHTML = local[language].link;
    document.querySelector("#change-light").innerHTML = local[language].changeLight;
    document.querySelector("#change-dark").innerHTML = local[language].changeDark;
  }
}

const navLanguage = navigator.language;
if (navLanguage) {
  changeLanguage(navLanguage.substr(0, 2).toLowerCase());
}
