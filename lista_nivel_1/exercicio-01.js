// Funções para os quatro operadores aritiméticos

// Função vai somar os números
const somarNumero = (numero1, numero2) => {
  const soma = numero1 + numero2;
  return console.log(`A soma é: ${soma}.`);
}

// vai chamar a função que vai soma os dois parâmetros 
somarNumero(3, 23);

// Função vai subtrair os números
const subtraiNumero = (numero1, numero2) => {
  const subtracao = numero1 - numero2;
  return console.log(`A subtração é ${subtracao}`);
}

// Vai chamar a função que subtrai o primeiro parâmetro pelo segundo
subtraiNumero(30, 12);

// Função vai  multiplicar os parâmetros
const multiplicarNumero = (numero1, numero2) => {
  const multiplicacao = numero1 * numero2;
  return console.log(`A multiplicação é: ${multiplicacao}`);
}

// Chamando a função que  multiplicar os parâmetros
multiplicarNumero(2, 9)

const dividerNumero = (numero1, numero2) => {
  const divisao = numero1 / numero2;
  console.log(`A divisão é: ${divisao}`);
}

dividerNumero(23, 2)

