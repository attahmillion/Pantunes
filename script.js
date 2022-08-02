const sliderImage = document.getElementById("slider-image");
const indicatorContainer = document.getElementById("indicator-container");

const images = ["slider-2", "slider-3", "slider-4", "slider-5"];

const indicators = [
  `<div class="active-slider"></div>
 <div class="slide-indicator"></div>
 <div class="slide-indicator"></div>
 <div class="slide-indicator"></div`,

  `<div class="slide-indicator"></div>
 <div class="active-slider"></div>
 <div class="slide-indicator"></div>
 <div class="slide-indicator"></div>`,

  `<div class="slide-indicator"></div>
 <div class="slide-indicator"></div>
 <div class="active-slider"></div>
 <div class="slide-indicator"></div>`,

  `<div class="slide-indicator"></div>
  <div class="slide-indicator"></div>
  <div class="slide-indicator"></div>
  <div class="active-slider"></div>`,
];

let index = 0;

setInterval(() => {
  index++;
  if (index === images.length) {
    index = 0;
  }
  // console.log(index);
  indicatorContainer.innerHTML = indicators[index];
  sliderImage.setAttribute("src", `/images/${images[index]}.png`);
}, 2000);
