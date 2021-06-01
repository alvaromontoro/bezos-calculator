const body = document.querySelector("body");
const nightmode = body.querySelector("#nightmode");
const languagebutton = body.querySelector("#language");
const languagepopup = body.querySelector("#language-popup");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
const earningRate = 3605;
const currencyFormatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });
const numberFormatter = new Intl.NumberFormat();
let amount = 0;

function createBubble(cost) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.id = `b${cost}`;
  aside.style.left = `${left + 5}vw`;
  aside.className = `bubble color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${prettyPrintTime(Math.floor(cost / earningRate))}</b>:<br>${local[language].messages[cost]}<br/><i>${currencyFormatter.format(cost)}</i>`;
  body.append(aside);
}

function prettyPrintTime(sec_num) {
  const days = Math.floor(sec_num / 60 / 60 / 24); // minutes / hours / days
  const hours = Math.floor((sec_num - (days * 24 * 60 * 60)) / 60 / 60); // subtract # days (in seconds) / minutes / hours
  const minutes = Math.floor((sec_num - (days * 24 * 60 * 60) - (hours * 60 * 60)) / 60); // subtract # days and hours / minutes
  const seconds = sec_num - (days * 60 * 60 * 24) - (hours * 60 * 60) - (minutes * 60) // subtract # days, hours, and minutes for remaining seconds

  // Append strings together
  let output = '';
  output += days > 0 ? ` ${days} ${days > 1 ? local[language].days : local[language].day}` : '';
  output += hours > 0 ? ` ${hours} ${hours > 1 ? local[language].hours : local[language].hour}` : '';
  output += minutes > 0 ? ` ${minutes} ${minutes > 1 ? local[language].minutes : local[language].minute}` : '';
  output += seconds > 0 ? ` ${seconds} ${seconds > 1 ? local[language].seconds : local[language].second}` : '';

  return output.trim();
}

// visit https://github.com/alvaromontoro/bezos-calculator to see the sources
let bubbleTimes = [
  15000,
  31200,
  47000,
  63409,
  81840,
  99000,
  116600,
  142000,
  174000,
  182000,
  250000,
  295300,
  320000,
  400000,
  538926,
  916000,
  1000000,
  1500000,
  2029612,
  7000000,
  69346250,
  81000000
];

bubbleTimes.forEach(function (el) {
  setTimeout(`createBubble(${el})`, el / earningRate * 1000);
});

// For theme (dark/light mode)
nightmode.addEventListener('click', () => {
  body.classList.toggle("light-mode");
  localStorage.setItem("darkmode", body.className !== "light-mode");
});

languagebutton.addEventListener('click', function () {
  languagepopup.classList.toggle("active");
});