const express = require('express')
let app = express()//Instância do módulo Express
const PORTA = '3200' //Constante com o numero da porta usada pelo app 

app.get('/', (req, res)=>{
    res.send('<h1>Olá Mundo!!!</h1>').status(200)
})

app.get('/sobre',(req, res)=>{
    res.send('<h1>Página sobre a empresa!</h1>').status(200)
})

app.use((req, res)=>{
    res.send('<h1>ERRO 404 - A página não pode ser exibida.</h1>').status(404)
})


//Coloca o servidor em execução para escutar requisições HTTP
app.listen(PORTA, function(){ 
    console.log(`Servidor rodando em: http://localhost:${PORTA}`)
})
