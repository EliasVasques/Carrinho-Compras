const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()  
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/itens')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/itens', router)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(
            process.env.PORT, 
            () => { console.log(`servidor rodando na porta ${process.env.PORT}`) }
        )
    })
