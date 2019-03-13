require('dotenv').config()
const express = require('express')
const app = express()

const APP_PORT = process.env.APP_PORT || 3000

const createError = require('http-errors')

const Sequelize = require('sequelize')

const sequelize = new Sequelize('bedu', 'bedutravels', 'secret*00*', {
  host: '127.0.0.1',
  dialect: 'sqlite',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Estoy conectado a BedutravelsDB')
  })
  .catch(err => {
    console.error('No puedo conectarme :C', err)
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res, next) => {
  const statusCode = err.status || 500
  return res.status(statusCode).json({
    code: statusCode,
    message: err.message
  })
})

app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))

module.exports = sequelize
