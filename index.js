const express = require('express')
const app = express()

const PORT = 3000

const bodyParser = require('body-parser')

const Sequelize = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Estoy conectado a BedutravelsDB')
  })
  .catch(err => {
    console.error('No puedo conectarme :C', err)
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Escuchando en el http://localhost:${PORT}`))
