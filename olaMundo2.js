//realizar a importação de - Modulos Mommonjs
const readline = require('readline')
//Criando a instancia de uma interface readline
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})
console.log("Olá Mundo!!!\n")
rl.question('Qual é o seu nome?\n',function(nome){
    console.log(`Olá ${nome}!!!\n`)
    rl.close()
})

const rl2 = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
})
rl2.question('Qual é o seu sobrenome?\n',function(nome){
    console.log(`Seu sobrenome é: ${nome}!!!\n`)
    rl2.close()

})


console.log("Olá Turma 38\n")
console.log("Olá Nodejs!!!\n")
