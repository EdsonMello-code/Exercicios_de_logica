// Reajustite de salario 
//Dados R$1000,00 + 15%

const reajustarSalario = () => {
  const reajuste = 1000 + (1000 * 0.15);
  return console.log(`Com reajuste de 15% o salário fica R$${reajuste},00.`);
}

// Retornar a função reajusteSalario para retornar salário

reajustarSalario();