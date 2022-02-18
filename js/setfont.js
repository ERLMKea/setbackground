out("jeg er i set font");

let fontsizenum = 10;
let lineFirst = document.querySelector('.first');
out(lineFirst);

const pbIncrease = document.querySelector(".pbIncrease");
const pbDecrease =  document.querySelector(".pbDecrease");

function increaseFontSize(btn) {
  out(btn);
  out("fontsize =" + lineFirst.style.fontSize);
  fontsizenum++;
  lineFirst.style.fontSize = String(fontsizenum) + 'px';

}

pbIncrease.addEventListener('click', btn => increaseFontSize(btn));
