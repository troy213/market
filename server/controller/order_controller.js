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
  const { id } = req.params
  const sql = `SELECT order_detail.order_id, order_detail.user_id, product.product_id, product.name, product.price, product.image, order_detail.qty FROM order_detail INNER JOIN product ON order_detail.product_id=product.product_id WHERE user_id=?`
  db.query(sql, id, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
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
}

module.exports = { orderGet, orderGetId, orderPost, orderPut, orderDelete }
