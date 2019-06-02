var execSQLQuery = function (sqlQry, res) {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'Banco_venda_de_ingresso_1.3'
    });

    connection.connect();
    connection.query(sqlQry, function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json(error);
        } else {
            res.json(results);
        }
        connection.end();
        console.log('Executou');
    });
}

module.exports = execSQLQuery;