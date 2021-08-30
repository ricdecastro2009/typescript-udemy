let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
  nome:'Luiz' as const, // as const é uma asserção nesse caso ele só pode ser Luiz
  sobrenome: 'Miranda',
}

//pessoa.nome("Ricardo")  ele n deixa aquicionar outro tipo q n seja Luiz

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'){ // tipos literais
  return cor;
}

console.log(escolhaCor('Vermelho'))


// Module mode
export default 1
