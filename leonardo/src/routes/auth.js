const router = require('express').Router();
const mysql = require('../database');

router.get('/', (req,res) => {
    res.render('login');
});

router.get('/usuario', (req,res) => {
    res.render('usuario');
})

router.post('/ingreso', async (req,res) => {
    let user = [];
    const { usuario,password } = req.body;
    const validarConsulta = await mysql.query(`SELECT * FROM usuarios WHERE usuario = '${usuario}' AND password = '${password}'`);
    for(var i of validarConsulta){
        user.push(i.usuario);
    }
    if(user.length > 0){
        res.redirect('/usuario');
    }else {
        res.redirect('/');
    }
});

module.exports = router;