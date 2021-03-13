const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()

const dbConfig = {
  connection: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    dialectOptions: {}
  })
}

module.exports = {
  connection: dbConfig.connection,
  Sequelize,
  DataTypes
}