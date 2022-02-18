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

function decreaseFontSize(btn) {
  out(btn);
  out("fontsize =" + lineFirst.style.fontSize);
  fontsizenum--;
  lineFirst.style.fontSize = String(fontsizenum) + 'px';

}

let pbWidth = 10;
const pbSetColor = document.querySelector(".pbSetColor");

function increaseButtonWidth(k) {
  out(k);
  if (k.key == 'F10') {
    pbWidth++;
    pbSetColor.style.width = String(pbWidth) + 'px';
  }
}

function escapePressed(k) {
  out(k);
  if (k.key == 'Escape') {
    out("hen har trykket escape");
    lineFirst.style.fontSize = '10px';
  }
}

function keyPressed(k) {
  out(k);
  switch (k.key) {
    case 'Escape':
      escapePressed(k);
      break;
    case 'F10':
      increaseButtonWidth(k);
      break;
    default:
      out("ikke noget vigtigt k=" + k.key);
  }
}

pbIncrease.addEventListener('click', btn => increaseFontSize(btn));
pbDecrease.addEventListener('click', decreaseFontSize);

document.addEventListener('keydown', keyPressed);














