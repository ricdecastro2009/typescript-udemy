// Tipos de Objetos
const objetoA : {
  chaveA: string;// o readonly chaveA: string n deixa alterar o valor.// o readonly n deixa alterar o valor.
  chaveB: string;
  chaveC?: string;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
  }

  objetoA.chaveA = 'Outro Valor'
  objetoA.chaveB = 'Outro Valor B'
  console.log(objetoA.chaveA)
  console.log(objetoA.chaveB)
  console.log(objetoA);




