const body = document.querySelector("body");
const button = body.querySelector("button");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
const earningRate = 3605;
const currencyFormatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0 });
const numberFormatter = new Intl.NumberFormat();
let amount = 0;

function createBubble(cost, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${prettyPrintTime(Math.floor(cost / earningRate))}</b>:<br>${text}<br/><i>${currencyFormatter.format(cost)}</i>`;
  body.append(aside);
}

function prettyPrintTime(sec_num) {
  const days = Math.floor(sec_num / 60 / 60 / 24); // minutes / hours / days
  const hours = Math.floor((sec_num - (days * 24 * 60 * 60)) / 60 / 60); // subtract # days (in seconds) / minutes / hours
  const minutes = Math.floor((sec_num - (days * 24 * 60 * 60) - (hours * 60 * 60)) / 60); // subtract # days and hours / minutes
  const seconds = sec_num - (days * 60 * 60 * 24) - (hours * 60 * 60) - (minutes * 60) // subtract # days, hours, and minutes for remaining seconds

  // Append strings together
  let output = '';
  output += days > 0 ? ` ${days} day${hours > 1 ? 's' : ''}` : '';
  output += hours > 0 ? ` ${hours} hour${hours > 1 ? 's' : ''}` : '';
  output += minutes > 0 ? ` ${minutes} minute${minutes > 1 ? 's' : ''}` : '';
  output += seconds > 0 ? ` ${seconds} second${seconds > 1 ? 's' : ''}` : '';

  return output.trim();
}

// visit https://github.com/alvaromontoro/bezos-calculator to see the sources
const bubbles = [
  { cost: 15000, text: "more than a minimum wage worker... in a year" },
  { cost: 31200, text: "more than Amazon's lowest paid employee... in a year" },
  { cost: 47000, text: "more than the median yearly salary in the United States" },
  { cost: 63409, text: "more than the average yearly salary in the United States" },
  { cost: 81840, text: "more than his own yearly salary!" },
  { cost: 99000, text: "enough not to qualify for covid-19 stimulus checks" },
  { cost: 116600, text: "more than the yearly salary of a Sr Software Developer" },
  { cost: 142000, text: "enough to buy a 'basic' Aston Martin Vantage" },
  { cost: 174000, text: "more than what a US Senator makes in a year" },
  { cost: 182000, text: "enough to buy a fully loaded Tesla Model S" },
  { cost: 250000, text: "enough to raise a child from birth to age 17" },
  { cost: 295300, text: "enough to buy a house for the median price in the USA" },
  { cost: 320000, text: "more than the yearly salary of 99% of the US population" },
  { cost: 400000, text: "more than what the US President makes in a year" },
  { cost: 538926, text: "more than the annual income of the US 1%" },
  { cost: 916000, text: "more than the median cost of a Manhattan apartment" },
  { cost: 1000000, text: "enough to pay for the most expensive fishing lure ever" },
  { cost: 1500000, text: "more than the annual income of the US 0.1%" },
  { cost: 2029612, text: "enough to pay for a house in Hollywood, CA" },
  { cost: 7000000, text: "more than the annual income of the US 0.01%" },
  { cost: 69346250, text: "more than the most expensive NFT" },
  { cost: 81000000, text: "more than the cost of a seat to space" },
];

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.cost}, "${el.text}")`, el.cost / earningRate * 1000);
});

// For theme (dark/light mode)
button.addEventListener('click', () => {
  body.classList.toggle("light-mode");
});
