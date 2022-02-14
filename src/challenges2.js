// Desafio 11
function generatePhoneNumber(number) {
  let resultado ;
  switch (number) {
    case number.length !== 11: 
      console.log("Array com tamanho incorreto.");
      break;
    case number < 0 :
      for  (i = 0; index > number.lenght ; i++){
      if (number[index] < 0){
         resultado = console.log(("não é possível gerar um número de telefone com esses valores" ))
      }
    }
      break;
    case number > 9: 
    for  (i = 0; index < number.lenght ; i++){
      if (number[index] > 9){
          console.log("não é possível gerar um número de telefone com esses valores" )
      }
    }
      break;
    case number.length > 11: 
      console.log("Array com tamanho incorreto.");
      break;

    default:
      console.log( "não é possível gerar um número de telefone com esses valores");
      break; 
    }
    return resultado 
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
