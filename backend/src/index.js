const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()  

const router = require('./routes/itens')

const app = express()

app.use(router)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(
            process.env.PORT, 
            () => { console.log(`servidor rodando na porta ${process.env.PORT}`) }
        )
    })
