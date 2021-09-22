const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

const orderGet = (req, res) => {
  const sql = 'SELECT * FROM order_detail'
  db.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
}

const orderGetId = (req, res) => {
  const { userId } = req.body
  const sql = 'SELECT * FROM order_detail WHERE user_id=?'
  if (userId) {
    db.query(sql, userId, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
  res.status(404).json({ success: false, message: '404 not found' })
}

const orderPost = (req, res) => {
  const { userId, productId, qty, date } = req.body
  const sql =
    'INSERT INTO order_detail (user_id, product_id, qty, date) VALUES (?,?,?,?)'
  if (userId && productId && qty && date) {
    db.query(sql, [userId, productId, qty, date], (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
  res.status(400).json({ success: false, message: 'failed to post' })
}

const orderPut = (req, res) => {
  const { orderId, qty } = req.body
  const sql = 'UPDATE order_detail SET qty=? WHERE order_id=?'
  if (orderId && qty) {
    db.query(sql, [qty, orderId], (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
  res.status(400).json({ success: false, message: 'failed to update' })
}

const orderDelete = (req, res) => {
  const { orderId } = req.body
  const sql = 'DELETE FROM order_detail WHERE order_id=?'
  if (orderId) {
    db.query(sql, orderId, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
  res.status(404).json({ success: false, message: '404 not found' })
}

module.exports = { orderGet, orderGetId, orderPost, orderPut, orderDelete }
