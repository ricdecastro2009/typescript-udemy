//Tuple

const dadosCliente1: [number, string] = [1, 'Luiz']; //
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz', 'Miranda'];// param optional
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

dadosCliente1[0] = 100; // é readonly
dadosCliente2[1] = "Carlos"
console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)

// readonly array
const array: readonly string[] = ['Luiz', 'Miranda'];
const array2: ReadonlyArray<string> = ['Teste', 'teste2'];
console.log(array); // n consigo fazer muita coisa pois sao readonly.
console.log(array2);







