const express = require('express')
const path = require('path')
const {lerJson, converterJson_Obj, converterObj_Json, gravarJson} = require('./controller/rwJson')
let app = express()
const arqDados = './alunos.json'
const PORTA = '3201'
const BASEDIR= path.join(__dirname, 'templates')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${BASEDIR}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${BASEDIR}/cadastrar.html`))

app.get('/registros',(req, res)=>{
    let dados = lerJson(arqDados)
    dados = converterJson_Obj(dados)
    dados.status = {message:"Ok.",code:'200'}
    res.json(dados).status(200)
})

app.post('/inserir', (req, res)=>{
    let registro = req.body
    console.log('Dados recebidos do form: ',registro)
    let dados = lerJson(arqDados)
    dados = converterJson_Obj(dados)
    dados.push(registro)
    dados = converterObj_Json(dados)
    let message = gravarJson(arqDados, dados)
    //console.log(dados)
    registro.status={message:message, code:'201'}
    res.json(registro).status(201)
    
})

app.use((req, res)=>res.sendFile(`${BASEDIR}/404.html`))

app.listen(PORTA,()=>console.log(`Rodando em: http://localhost:${PORTA}`))


