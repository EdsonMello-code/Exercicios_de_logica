// Verificar se um número é maior que 10 ou menor

const verificarNumero = numero => {
  return numero >= 10 ? console.log(`O ${numero} é maior ou igual a 10.`) : console.log(`O número ${numero} é menor que 10.`)
}

verificarNumero(9)