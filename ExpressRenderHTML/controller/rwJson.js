const fs = require('fs')
module.exports = {
    lerJson:(arquivo)=>{
       //Lê arquivo de forma síncrona
        let json = fs.readFileSync(arquivo, 'utf8')
        return json
    } ,
    converterJson_Obj:(json)=>{
        // Converte json para objeto JS
        let obj = JSON.parse(json)
        return obj
    },
    converterObj_Json:(obj)=>{
        //Converte objeto JS para json
        let json = JSON.stringify(obj)
        return json
    },
    gravarJson:(arquivo, json)=>{
        try {
            //Grava arquivos de forma síncrona
            fs.writeFileSync(arquivo, json)
            return "Gravado com sucesso!"
        } catch (error) {
            return "Erro na gravação!\n"+error
        }        
    }
}