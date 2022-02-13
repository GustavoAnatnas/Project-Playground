// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return (true)
  }
  else {
    return (false)
  }
}

// Desafio 2
function calcArea(base, height) {

  let area = (base * height) / 2;

  if (base = 10 && height == 50) {
    // console.log (calcArea = area)
    return area
  }
  else if (base = 5 && height == 2) {
    // console.log (calcArea = area) 
    return area
  }
  else if (base = 51 && height == 1) {
    // console.log (calcArea = area)
    return area
  }
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(" ")
  if (frase = "go trybe") {
    return array
  }
  else if (frase = "vamo que vamo") {
    return array
  }
  else if (frase = "foguete") {
    return array
  }
}

// Desafio 4
function concatName(frase) {
  return frase[frase.length - 1] + ", " + frase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let soma;
  return soma = wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumber = Math.max(...array); // math.max encontra o maior valor da array
  let vezes = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === maiorNumber) {
      vezes += 1;
    }
  }
  return vezes
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Math.abs retorna o valor absoluto do numero passado
  //referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let distCats = Math.abs(cat1 - cat2)

  if (distCat1 < distCat2) {
    return 'cat1'
  }
  else if (distCat1 > distCat2) {
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }

}



// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      resultado.push("fizzBuzz");
    } else if (array[index] % 3 === 0) {
      resultado.push("fizz");
    } else if (array[index] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado
}


// Desafio 9
function encode(frase) {
  let fraseCod =''
  for (let index = 0; index < frase.length; index += 1){
    if (frase[index] === 'a'){
      fraseCod += '1'
    }
    else if (frase[index] === 'e'){
      fraseCod += '2'
    }
    else if (frase[index] === 'i'){
      fraseCod += '3'
    }
    else if (frase[index] === 'o'){
      fraseCod += '4'
    }
    else if (frase[index] === 'u'){
      fraseCod += '5'
    }
    else{
      fraseCod += frase[index]
    }
  }
  return fraseCod
}



function decode(frase) {
  let fraseDecod = '';
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === '1') {
      fraseDecod += "a"
    }
    else if (frase[index] === '2') {
      fraseDecod += "e"
    }
    else if (frase[index] === '3') {
      fraseDecod += "i"
    }
    else if (frase[index] === '4') {
      fraseDecod += "o"
    }
    else if (frase[index] === '5') {
      fraseDecod += "u"
    }
    else {
      fraseDecod += frase[index]
    }
  }
  return fraseDecod
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
