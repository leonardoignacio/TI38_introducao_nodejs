const soma = (num1, num2)=>parseInt(num1)+parseInt(num2)
const sub = (num1, num2)=>parseInt(num1)-parseInt(num2)
const mult=(num1, num2)=>parseInt(num1)*parseInt(num2)
const div=(num1, num2)=>num2!=0? parseInt(num1)/parseInt(num2):"Não é possível dividir por zero!"

console.log("Soma: ",soma(20,30))
console.log("Subtração:", sub(25,5))
console.log("Multiplicação: ",mult(8,7))
console.log("Divisão:", div(100,4))
console.log("Divisão:", div(35,0))

