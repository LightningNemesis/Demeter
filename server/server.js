const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')

const app = express()

const port = 4000


require('./app/routes')(app, {})
app.listen(port, () => {
  console.log('we are live on port 4000')
//   console.log(parsed_data)
})
