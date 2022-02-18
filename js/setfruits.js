const out = function (...str) {console.log(...str)};

const arrFruits = ['apple', 'orange', 'banana', 'jordbær'];

const pFruit = document.getElementById('fruits');
out(pFruit);

function putFruits(item) {
  pFruit.innerHTML += item + '<br>';
}

function putFruitsIx(item, index) {
  //pFruit.innerText += index + ':' + item + '<br>';  får plain text så br tag virker ikke
  pFruit.innerHTML += index + ':' + item + '<br>';
}

pFruit.innerHTML= '';
arrFruits.forEach(putFruitsIx);


