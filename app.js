//background colors will follow the rainbow colors in random order
const btn = document.querySelector("#txt-btn");

btn.addEventListener("click", bttn);

function bttn() {
  let rainbowColor = rgbList[Math.floor(Math.random() * rgbList.length)];
  document.body.style.backgroundColor = `rgb(${rainbowColor})`;
}

let rgbList = [
  [255, 0, 0], //red
  [255, 105, 180], //pink
  [255, 130, 39], //orange
  [243, 243, 116], //yellow
  [0, 220, 0], //green
  [0, 0, 255], //blue
  [148, 0, 211], //purple
];
