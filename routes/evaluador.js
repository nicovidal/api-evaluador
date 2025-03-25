const {Router}= require('express');
const { evaluador } = require('../controller/evaluadorController');

const router=Router();


router.post('/evaluarCliente',evaluador)



module.exports=router