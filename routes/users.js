
const models = require('../models/model')
const express = require('express')
const { add } = require('nodemon/lib/rules')
const { response } = require('../app')

const router = express.Router()
module.exports = router
router.use(express.json())

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan

// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.

router.get('/users', (req, res) => {
    res.json(models.listUsers())
});

router.post('/users', (req, res) => {
    const { email , name } = req.body;
    let usuarios = models.listUsers();
    let user = usuarios.find(u=> u.name === name)
    if(user){
        res.status(400).json({ error: 'El usuario ya existe' })
    }    
    models.addUser(email,name);
    res.status(201).json({ msg: `Usuario ${email} creado correctamente` })
});

router.patch('/users/plan', (req, res) => {
    const { user } = req.query;
    try{
        res.status(200).json({msg:models.switchPlan(user)})
    }
    catch(e){
        res.status(404).json({ error: 'Usuario inexistente' })
    }
});



