const express = require("express")
const bd = require('./controllers/bd.js')
require('dotenv').config()
const cors = require("cors")
let app = express()
const PORT = 3200

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/', (req, res)=>res.send("<h1>Bem vindo a API</h1>").status(200))

//Desenvolvimento de rotas p/ CRUD
//Insert de dados
app.post('/api/:tabela', async (req, res)=>{
    try {
        //Extrai dados da requisição e transforma em array de valores
        let dados = Object.values(req.body).map((val)=>val)
        let tabela = req.params.tabela
        let respBd= await bd.inserir(tabela, dados)
        res.json(respBd).status(201) 
    } catch (error) {
        res.json(erro).status(400)
    }
})

//Leitura de dados
app.get('/api/:tabela', async (req, res)=>{
    try {
        let tabela = req.params.tabela
        // select * form tabela
        let respBd= await bd.ler(tabela)
        res.json(respBd).status(200) 
    } catch (error) {
        res.json(erro).status(400)
    }
})
app.get('/api/:tabela/:id', async (req, res)=>{
    try {
        let {tabela, id}= req.params
        // select * from tabela where id=id
        let respBd = await bd.ler(tabela, id)
        res.json(respBd).status(200)
    } catch (error) {
        res.json(erro).status(400)
    }
})

// Atualização de dados
app.patch('/api/:tabela/:id', async (req, res)=>{
    try {
        let dados = Object.values(req.body).map((val)=>val)
        let {tabela, id}= req.params
        let respBd = await bd.atualizar(tabela, dados, id)
        res.json(respBd).status(200)
    } catch (error) {
        res.json(erro).status(400)
    }
})
// Excluir dados
app.delete('/api/:tabela/:id', async (req, res)=>{
    try {
        let {tabela, id}= req.params
        let respBd = await bd.deletar(tabela, id)
        res.json(respBd).status(200)
    } catch (error) {
        res.json(erro).status(400)
    }
})


app.use((req, res)=>res.send("<h1>Erro 404 - URL não encontrada</h1>").status(404))

app.listen(PORT, ()=>console.log(`Servidor rodando em: http://localhost:${PORT}`))