const express = require('express')
const path = require('path')
const con = require('./controller/bd')()
const statusCon = con?'Conectado ao banco!':''
let app = express()
const PORTA = '3201'
const BASEDIR= path.join(__dirname, 'templates')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res)=>res.sendFile(`${BASEDIR}/index.html`))
app.get('/cadastrar', (req, res)=>res.sendFile(`${BASEDIR}/cadastrar.html`))



app.use((req, res)=>res.sendFile(`${BASEDIR}/404.html`))

app.listen(PORTA,()=>console.log(`Rodando em: http://localhost:${PORTA} \n${statusCon}`))
