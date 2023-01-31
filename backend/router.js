const router = require('express').Router()
const Users = require('../Models/User')

router.get('/users',(req,res) =>{
    Users.fin({},(err,result)=>{
        res.json(result)
    })
})