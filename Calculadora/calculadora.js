const soma = (num1, num2)=>parseInt(num1)+parseInt(num2)
exports.soma = soma
const sub=(num1, num2)=>parseInt(num1)-parseInt(num2)
exports.sub = sub
const mult=(num1, num2)=>parseInt(num1)*parseInt(num2)
exports.mult = mult
const div=(num1, num2)=>num2!=0? parseInt(num1)/parseInt(num2):"Não é possível dividir por zero!"
exports.div = div
