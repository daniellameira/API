const express = require('express');
var router = express.Router();
var eventopro = require('../controllers/eventopro');

//router.get('/tb_usuario/', eventopro.usuario_list );
router.get('/tb_pessoa/:id?', eventopro.usuario_create);
router.delete('/tb_pessoa/:id', eventopro.usuario_delete);
module.exports = router;