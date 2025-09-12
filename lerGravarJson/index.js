const rw = require('./rwJson')
let registro = {
    nome: 'Vanessa',
    nota1:9.5,
    nota2:10,
    nota3:10,
    nota4:9.5
}
let arquivo = './alunos.json'
let registros = rw.lerJson(arquivo)
//console.log(registros)
registros = rw.converterJson_Obj(registros)
//console.log(registros)

registros.push(registro)//Inserir o novo registro no array
//console.log(registros)

registros = rw.converterObj_Json(registros)
//console.log(registros)

//Regrava o arquivo com o novo registro
console.log(rw.gravarJson(arquivo, registros))








