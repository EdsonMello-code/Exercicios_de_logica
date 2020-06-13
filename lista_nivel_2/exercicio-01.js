// Número impar ou par

// Nas arrow function quando só tem um parâmetro pode tirar os parênteses
const imparOuPar = numero => {
  // If ternário, poder ser utilizado quando só temos duas possíveis saida para a função,
  // mas pode usar o if normalmente
  return (numero % 2 === 0) ? console.log(`O ${numero} é par`) : console.log(`O ${numero} é impar`)
}

imparOuPar(9);


