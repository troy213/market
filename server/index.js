const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000
const products = require('./product/Products')

app.use([cors(), express.json(), express.urlencoded({ extended: false })])

app.get('/', (req, res) => {
  res.status(200).json({ success: true, data: products })
})

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: '404 Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
