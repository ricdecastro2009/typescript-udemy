// Funções sem retorno
function semRetorno(...args: string[]): void{
  console.log(args.join('    '));
}

const pessoa = {
  nome: "Ricardo",
  sobrenome: "Castro",

  exibirNome():void{
    console.log(this.nome + ' ' + this.sobrenome);
  },

};

semRetorno('Ricardo', 'Castro');
pessoa.exibirNome()

export {pessoa}




