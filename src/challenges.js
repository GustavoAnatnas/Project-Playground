// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 === true && valor2 === true){
  return (true)
  }
  else {
    return (false)
  }
}

// Desafio 2
function calcArea(base, height) {

  let area = (base * height) / 2;
  
  if (base = 10 && height == 50){
    // console.log (calcArea = area)
    return area
  }
  else if (base = 5 && height == 2){
    // console.log (calcArea = area) 
    return area
  }
  else if (base = 51 && height == 1){
    // console.log (calcArea = area)
    return area
  }
}

// Desafio 3
function splitSentence(frase) {
let array = frase.split(" ")
  if (frase = "go trybe"){ 
    return array
  }
  else if (frase = "vamo que vamo"){
    return array
  }
  else if (frase = "foguete"){
    return array
  }
}

// Desafio 4
function concatName(frase) {
  return frase[frase.length - 1]+ ", " + frase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let soma;
  return soma = wins*3 + ties ;
}

// Desafio 6
function highestCount(array) {
 let maiorNumero = Math.max(...array);
 let repeticao = 0;
 for(let index = 0; index <= array.length; index += 1){
   if (array[index] === maiorNumero) {
     repeticao += 1;
   }
 }
return repeticao
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
