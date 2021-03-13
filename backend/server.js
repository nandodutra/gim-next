const express = require('express')
const bodyParser = require('body-parser')
const cors       = require('cors')
const routes = require('./config/routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

routes(app)

app.listen(3001, () => {
  console.log(`Example app listening at http://localhost:${3001}`)
})