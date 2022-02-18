const out = function (...str) {console.log(...str)};

out("vi sætter classnames");

const pbSetStyle = document.getElementById('pbSetStyle');
const inpElementName = document.getElementById('elementName');
const inpStyleName = document.getElementById('styleName');

function setElementStyle(btn) {
  const elm = document.querySelector("." + inpElementName.value);
  out(elm);
  const styleName = inpStyleName.value;
  out(styleName);
  //elm.className = styleName;
  elm.className = '';
  elm.classList.add(styleName);
  elm.classList.add(inpElementName);
}

pbSetStyle.addEventListener('click', setElementStyle);
