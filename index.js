// Express
const express = require('express')
const app = express()
const APP_PORT = 3000

// Dependecies y/o modelos
const cors = require('cors')
const mongoose = require('mongoose')
const TourRoutes = require('./routes/Tours')
const APP_MONGO_URI = 'mongodb+srv://userAdmin:*secret00*@bedutravels-b1trr.mongodb.net/BeduTravels?retryWrites=true&w=majority'

// conexion mongoose
mongoose.connect(APP_MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log(`Connect to MongoAtlas`))
  .catch((err) => { throw err })

// use
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '0.0.0.0')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Content-Type', 'application/x-www-form-urlencoded')
  res.header('Access-Control-Request-Method: POST')
  next()
})

app.use('/tours', TourRoutes)

// listen
app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
