const IMG_VOL = 4;

const body = document.querySelector("body");

function drawImage(name) {
  const image = new Image();
  image.src = `images/${name}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}

function getRandNum(num) {
  return Math.floor(Math.random() * num) + 1; // 1 ~ num
}
function init() {
  const randNum = getRandNum(IMG_VOL),
    imgName = `그림${randNum}`;

  drawImage(imgName);
}

init();
