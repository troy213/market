const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

const userRouter = require('./router/user_router')
const productRouter = require('./router/product_router')
const orderRouter = require('./router/order_router')
const tokenAuth = require('./middleware/token_auth')
const getOrder = require('./middleware/get_order')

app.use([cors(), express.json(), express.urlencoded({ extended: false })])
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)

app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'hello from the server' })
})

app.get('/auth', tokenAuth, getOrder, (req, res) => {
  const user = res.locals.user
  const order_list = res.locals.data
  const total = res.locals.total
  res.status(200).json({ success: true, data: { user, order_list, total } })
})

app.all('*', (req, res) => {
  res.status(404).json({ success: false, message: '404 Not Found' })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
