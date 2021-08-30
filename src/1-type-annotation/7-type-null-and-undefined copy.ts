// Type undefined

import { stringify } from 'querystring';

let x
if(typeof x === 'undefined') x = 20
console.log(x * 20);

export function createPerson(
  firstName: string,
  lastName?: string
){
  return{
    firstName,
    lastName,
  }
}

export function squareOf(x: any){
  if(typeof x === 'number') return x * x
  return null

}

export function squareOf2(x: any){
  if(typeof x === 'number') return x * x
  return null

}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf2("2");
console.log(squareOfTwoNumber);
console.log(squareOfTwoString);

if(squareOfTwoString === null){
  console.log("Conta inválida")
}else{
  console.log(squareOfTwoString * 100)
}


