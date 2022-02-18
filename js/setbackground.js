const out = function (...str) {console.log(...str)};

out("vi er klar til setbackground");

const bdy = document.querySelector("body");
out(bdy);

const pbCol = document.querySelector(".pbSetColor");
out(pbCol);

const inpCol = document.querySelector(".getColor");
out(inpCol);

pbCol.textContent = "Tryk mig for at ændre farven";

function changeColorBody() {
  const col = inpCol.value;
  out(col);
  bdy.style.backgroundColor = col;
}

pbCol.addEventListener("click", changeColorBody);





