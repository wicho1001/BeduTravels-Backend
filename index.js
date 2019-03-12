const express = require('express')
const app = express()

const PORT = 3000

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const TourRoutes = require('./routes/Tours')

mongoose.connect('mongodb://localhost:27017/bedutravels', { useNewUrlParser: true }, () => console.log('Conectado a BeduTravelsDB'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/tours', TourRoutes)

app.listen(PORT, () => console.log(`Escuchando en el http://localhost:${PORT}`))
