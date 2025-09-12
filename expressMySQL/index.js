const express = require('express')
const path = require('path')
let con = require('./controller/bd')()
const statusCon = con?'Conectado ao banco!':''
let app = express()
const PORTA = '3201'
const BASEDIR= path.join(__dirname, 'templates')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${BASEDIR}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${BASEDIR}/cadastrar.html`))

//Inserir registro Aluno
app.post('/cadastrar', (req, res)=>{
    let dados = req.body
    dados = [dados.nome, parseFloat(dados.nota1), parseFloat(dados.nota2), parseFloat(dados.nota3), parseFloat(dados.nota4)]
    let sql = `
                INSERT INTO alunos (nome, nota1, nota2, nota3, nota4)
                VALUES (?, ?, ?, ?, ?);
    `
    con.query(sql, dados, (erro, resp)=>{
        let resposta
        if(erro) resposta = {...erro, status:400, message: `Os dados não foram gravados`}
        else resposta = {...resp, status:201}
        res.json(resposta)
    })
})


app.use((req, res)=>res.sendFile(`${BASEDIR}/404.html`))

app.listen(PORTA,()=>console.log(`Rodando em: http://localhost:${PORTA} \n${statusCon}`))
