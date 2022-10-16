const express = require('express');
const { Sequelize } = require('sequelize');
const {db,User}=require('./db');

let server = express();
server.use(express.json());

// prueba post
server.post('/user',async(req,res)=>{
    const {nickName,name, surname, email,seller}=req.body;
    try{
        const newUser= await User.create({
            nickName,
            name,
            surname,
            email,
            seller
        });
        res.json(newUser);
    } catch(e){
        res.json({error:e.message});
    }
})
// prueba get
server.get('/user',async(req,res)=>{
    try{
        const users= await User.findAll();
        res.json(users);
    } catch(e){
        res.json({error:e.message});
    }
})
// prueba get por id
server.get('/user/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const user= await User.findByPk(id);
        res.json(user);
    } catch(e){
        res.json({error:e.message});
    }
})

// server
server.listen(3000, async ()=>{
    console.log('escuchando puerto 3000');
    await db.sync({alter:true});
    console.log('Base de datos pipi-cucú');
});