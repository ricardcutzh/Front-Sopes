var express = require('express'); //REQUIRIENDO EXPRESS
var router = express.Router(); // DEFINIENDO LAS RUTAS DE EXPRESS
var GeneralController = require('../controllers/GeneralController');
router.route('/').get(function(req,res){
    res.status(200).render('home');
});
router.route('/usuarios').get(function(req, res){
    res.status(200).render('usuarios');
});
router.route('/usuarios').post(GeneralController.usuariosView);
router.route('/categorias').get(function(req, res){
    res.status(200).render('categorias');
});
router.route('/categorias').post(GeneralController.categoriasView);
module.exports = router; //EXPORTANDO EL OBJETO ROUTER PARA PODER ACCEDER A EL DESDE APP
