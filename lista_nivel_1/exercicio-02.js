// Calcular juro simples

const CalcularJurosSimples = (c, i, t) => {
  const jurosSimples = c * i * t;
  return console.log(`O juro simples é: R$${jurosSimples},00.`);
}

// Chama o função que calcular júros de 100 reais a 10% em três meses
CalcularJurosSimples(100, 0.1, 3);
