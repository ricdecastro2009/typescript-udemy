enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
  ROXO = 'ROXO'
}

console.log(Cores.VERMELHO);
console.log(Cores[0])
console.log(Cores.ROXO);

function escolherCor(cor: Cores): void{
  console.log("----------------");
  console.log(Cores[cor]);
}

export default escolherCor(Cores.AZUL)
