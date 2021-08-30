// Utilize Any apenas em ultimo caso
function showMessage(msg:any){
  return msg
}
// Deixa retornar qualquer coisa
console.log(showMessage("Ricardo"))
console.log(showMessage([1,2,3]));
console.log(showMessage({"teste": "teste"}))
console.log(showMessage(1))



