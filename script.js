const output = document.querySelector("output");
const body = document.querySelector("body");
const numColors = 8;
const numTiming = 5;
const numTops = 3;
let amount = 0;

function createBubble(time, text) {
  const left = Math.floor(Math.random() * 65);
  const aside = document.createElement("aside");
  aside.style.left = `${left + 5}vw`;
  aside.className = `color${Math.floor(Math.random() * numColors)} time${Math.floor(Math.random() * numTiming)} top${Math.floor(Math.random() * numTops)}`;
  aside.innerHTML = `<b>${time} seconds</b>:<br>${text}`;
  body.append(aside);
}

const bubbles = [
  { time: 4, text: "more than a minimum wage worker... in a year" },
  { time: 9, text: "more than Amazon's lowest paid employee... in a year" },
  { time: 13, text: "more than the median yearly salary in the United States" },
  { time: 18, text: "more than the average yearly salary in the United States" },
  { time: 23, text: "more than his own yearly salary!" },
  { time: 28, text: "enough not to qualify for covid-19 stimulus checks" },
  { time: 32, text: "more than the average yearly salary of a Senior Software Developer" },
  { time: 38, text: "enough to buy a 'basic' Aston Martin Vantage" },
  { time: 48, text: "more than what a US Senator makes in a year" },
  { time: 55, text: "enough to buy a fully loaded Tesla Model S" },
  { time: 70, text: "enough to raise a child from birth to age 17" },
  { time: 80, text: "enough to buy a house for the median price in the USA" },
  { time: 89, text: "more than the yearly salary of 99% of the US population" },
  { time: 111, text: "more than what the US President makes in a year" },
  { time: 277, text: "enough to pay for the most expensive fishing lure ever" }
]

bubbles.forEach(function (el) {
  setTimeout(`createBubble(${el.time}, "${el.text}")`, el.time * 1000);
});
