const mysql = require('mysql2')
module.exports = ()=>{
    //Conexão com o banco
    const con = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'express_ti38' 
    })
    return con
}
