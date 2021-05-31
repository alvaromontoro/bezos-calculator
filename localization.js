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

    const earningRate = 3605;
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach(bubble => {
      const cost = bubble.id.replace("b", "");
      bubble.innerHTML = `<b>${prettyPrintTime(Math.floor(parseInt(cost) / earningRate))}</b>:<br>${local[language].messages[cost]}<br/><i>${currencyFormatter.format(parseInt(cost))}</i>`
    });

    document.querySelector("#language-popup").classList.remove("active");
  }
}

const navLanguage = navigator.language;
if (navLanguage) {
  changeLanguage(navLanguage.substr(0, 2).toLowerCase());
}
