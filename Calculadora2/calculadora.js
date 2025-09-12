module.exports = {
    soma:(num1, num2)=>parseInt(num1)+parseInt(num2),
    sub:(num1, num2)=>parseInt(num1)-parseInt(num2),
    mult:(num1, num2)=>parseInt(num1)*parseInt(num2),
    div:(num1, num2)=>num2!=0? parseInt(num1)/parseInt(num2):"Não é possível dividir por zero!"
}
