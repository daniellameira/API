// var execSQLQuery = require('../config/database');
var execSQLQuery = require('../config/database');

//exports.usuario_list = function (req, res) {
  //  execSQLQuery('SELECT * FROM ta_compra WHERE idt_evento_compra = ' + parseInt(req.params.id), res);
//}

exports.usuario_delete = function (req, res) {
    execSQLQuery('DELETE FROM tb_pessoa WHERE pk_pessoa = ' + parseInt(req.params.id), res);
}

exports.usuario_create = function (req, res) { }
