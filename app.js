//background colors will follow the rainbow

const btn = document.querySelector("#txt-btn");

btn.addEventListener("click", bgColor);

const rainbowColors = {
  Red: "255,0,0",
  Pink: "255,105,180",
  Orange: "255,130,39",
  Yellow: "243,243,116",
  Green: "0,220,0",
  Blue: "0,108,255",
  Purple: "148,0,211",
};

function bgColor(e) {
  return (document.body.style.backgroundColor = `rgb(255,0,0)`);
  e.preventDefault();
}

/*rgb colors
//red: 255, 0, 0
//pink: 255, 105, 180
//orange: 255, 130, 39
//yellow: 243, 243, 116
//green: 0, 220, 0
//blue: 0, 108, 255
//purple: 148, 0, 211
*/
