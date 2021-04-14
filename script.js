const output = document.querySelector("output");
const body = document.querySelector("body");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
const earningRate = 3605;
const numberFormatter = new Intl.NumberFormat('en', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
let amount = 0;

function createBubble(cost, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${Math.floor(cost / earningRate)} seconds</b>:<br>${text}<br/><i>${numberFormatter.format(cost)}</i>`;
  body.append(aside);
}

const bubbles = [
  { cost: 14420, text: "more than a minimum wage worker... in a year" },
  { cost: 32445, text: "more than Amazon's lowest paid employee... in a year" },
  { cost: 46865, text: "more than the median yearly salary in the United States" },
  { cost: 64890, text: "more than the average yearly salary in the United States" },
  { cost: 82915, text: "more than his own yearly salary!" },
  { cost: 100940, text: "enough not to qualify for covid-19 stimulus checks" },
  { cost: 115360, text: "more than the average yearly salary of a Senior Software Developer" },
  { cost: 136990, text: "enough to buy a 'basic' Aston Martin Vantage" },
  { cost: 173040, text: "more than what a US Senator makes in a year" },
  { cost: 198275, text: "enough to buy a fully loaded Tesla Model S" },
  { cost: 252350, text: "enough to raise a child from birth to age 17" },
  { cost: 288400, text: "enough to buy a house for the median price in the USA" },
  { cost: 320845, text: "more than the yearly salary of 99% of the US population" },
  { cost: 400155, text: "more than what the US President makes in a year" },
  { cost: 538926, text: "more than the annual income of the US 1%" }, // Source: https://www.usatoday.com/story/money/2020/07/01/how-much-you-need-to-make-to-be-in-the-1-in-every-state/112002276/#:~:text=Nationwide%2C%20it%20takes%20an%20annual,of%20%2482%2C535%20among%20all%20taxpayers.
  { cost: 916000, text: "more than the median cost of a Manhatten apartment" }, //Source: https://www.nytimes.com/2015/01/18/realestate/what-750000-buys-you-in-new-york-city.html
  { cost: 998585, text: "enough to pay for the most expensive fishing lure ever" },
  { cost: 1500000, text: "more than the annual income of the US 0.1%" }, // Source: https://review.chicagobooth.edu/economics/2017/article/never-mind-1-percent-lets-talk-about-001-percent
  { cost: 2029612, text: "enough to pay for a house in Hollywood, CA" }, // Source: https://www.zillow.com/hollywood-hills-los-angeles-ca/home-values/
  { cost: 7000000, text: "more than the annual income of the US 0.01%" }, // Source: https://review.chicagobooth.edu/economics/2017/article/never-mind-1-percent-lets-talk-about-001-percent
  { cost: 69346250, text: "more than the most expensive NFT" }, // Source: https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924
  { cost: 81000000, text: "more than the cost of a seat to space" }, // Source: https://www.foxbusiness.com/money/space-travel-what-it-costs-to-leave-earth
]

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.cost}, "${el.text}")`, el.cost / earningRate * 1000);
});
