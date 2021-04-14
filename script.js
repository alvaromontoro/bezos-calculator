const output = document.querySelector("output");
const body = document.querySelector("body");
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
  if (days > 0) {
    output += `${numberFormatter.format(days)} day${days > 1 ? 's' : ''}`
  }

  if (hours > 0) {
    output += `${days > 0 ? ' ': ''}${hours} hour${hours > 1 ? 's' : ''}`
  }

  if (minutes > 0) {
    output += `${days > 0 || hours > 0 ? ' ': ''}${minutes} minute${minutes > 1 ? 's' : ''}`
  }

  if (seconds > 0) {
    output += `${days > 0 || minutes > 0 || minutes > 0 ? ' ': ''}${seconds} second${seconds > 1 ? 's' : ''}`
  }
  return output;
}

const bubbles = [
  { cost: 15000, text: "more than a minimum wage worker... in a year" }, // Based on $7.25/h, 40h/week, 52week/year
  { cost: 31200, text: "more than Amazon's lowest paid employee... in a year" }, // Based on $15/h, 40h/week, 52week/year
  { cost: 47000, text: "more than the median yearly salary in the United States" }, // https://dqydj.com/average-median-top-salary-percentiles/
  { cost: 63409, text: "more than the average yearly salary in the United States" }, // https://dqydj.com/average-median-top-salary-percentiles/
  { cost: 81840, text: "more than his own yearly salary!" }, // https://www.marketwatch.com/story/amazon-ceo-jeff-bezos-salary-of-81840-hasnt-changed-in-decades-2020-04-16
  { cost: 99000, text: "enough not to qualify for covid-19 stimulus checks" }, // https://www.consumerfinance.gov/about-us/blog/guide-covid-19-economic-stimulus-checks/
  { cost: 116600, text: "more than the yearly salary of a Sr Software Developer" }, // https://www.salary.com/research/salary/listing/senior-software-developer-salary
  { cost: 142000, text: "enough to buy a 'basic' Aston Martin Vantage" }, // https://www.caranddriver.com/aston-martin/vantage
  { cost: 174000, text: "more than what a US Senator makes in a year" }, // https://en.wikipedia.org/wiki/Salaries_of_members_of_the_United_States_Congress
  { cost: 182000, text: "enough to buy a fully loaded Tesla Model S" }, // https://www.tesla.com/models/design
  { cost: 250000, text: "enough to raise a child from birth to age 17" }, // https://www.fool.com/investing/general/2014/08/23/does-it-really-cost-250000-to-raise-a-child.aspx
  { cost: 295300, text: "enough to buy a house for the median price in the USA" }, // https://www.fool.com/the-ascent/research/average-house-price-state/
  { cost: 320000, text: "more than the yearly salary of 99% of the US population" }, // https://dqydj.com/average-median-top-salary-percentiles/
  { cost: 400000, text: "more than what the US President makes in a year" }, // https://www.thebalance.com/presidents-salary-4579867
  { cost: 538926, text: "more than the annual income of the US 1%" }, // https://www.usatoday.com/story/money/2020/07/01/how-much-you-need-to-make-to-be-in-the-1-in-every-state/112002276/
  { cost: 916000, text: "more than the median cost of a Manhattan apartment" }, // https://www.nytimes.com/2015/01/18/realestate/what-750000-buys-you-in-new-york-city.html
  { cost: 1000000, text: "enough to pay for the most expensive fishing lure ever" }, // https://www.sportfishingmag.com/most-expensive-fishing-lures-in-world/
  { cost: 1500000, text: "more than the annual income of the US 0.1%" }, // https://review.chicagobooth.edu/economics/2017/article/never-mind-1-percent-lets-talk-about-001-percent
  { cost: 2029612, text: "enough to pay for a house in Hollywood, CA" }, // https://www.zillow.com/hollywood-hills-los-angeles-ca/home-values/
  { cost: 7000000, text: "more than the annual income of the US 0.01%" }, // https://review.chicagobooth.edu/economics/2017/article/never-mind-1-percent-lets-talk-about-001-percent
  { cost: 69346250, text: "more than the most expensive NFT" }, // https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924
  { cost: 81000000, text: "more than the cost of a seat to space" }, //https://www.foxbusiness.com/money/space-travel-what-it-costs-to-leave-earth
]

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.cost}, "${el.text}")`, el.cost / earningRate * 1000);
});
