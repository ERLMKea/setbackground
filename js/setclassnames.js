const outx = function (...str) {console.log(...str)};

const out = function (...str) {
  const arr1 = str;
  for (const obj of arr1) {
    let clsname = obj.__proto__;
    clsname = clsname.constructor;
    console.log(obj + '  , er af typen=' + typeof obj + ' , classname=' + clsname);
  }
};

out("vi sætter classnames");
console.log("hej", 4, out);

const pbSetStyle = document.getElementById('pbSetStyle');
const inpElementName = document.getElementById('elementName');
const inpStyleName = document.getElementById('styleName');
out(inpStyleName);

function setElementStyle(btn) {
  const elm = document.querySelector("." + inpElementName.value);
  out(elm);
  const styleName = inpStyleName.value;
  out(styleName);
  //elm.className = styleName;
  elm.className = '';
  elm.classList.add(styleName);
  elm.classList.add(inpElementName.value);
}


pbSetStyle.addEventListener('click', setElementStyle);



