
// Tipos básicos
let nome:string  = 'Luiz';
let idade:number  = 30;
let adulto:boolean  = true;
let simbolo:symbol  = Symbol('qualquer-tipo');

// Tipos de Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Tipos de Objetos
let pessoa: {nome: string, idade: number, adulto?:boolean} = {
  idade: 30,
  nome: 'Ricardo',
}

// Tipos de Funções
function soma(x:number,y:number): number {
  return x + y
}// return number

const soma2: (x:number, y:number) => number = (x, y) => x + y


