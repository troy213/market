const db = require('../db_config')

const orderGet = (req, res) => {
  const sql = 'SELECT * FROM order_detail'
  db.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
}

const orderPost = (req, res) => {
  const userId = res.locals.user.id
  const { productId, qty, date } = req.body
  const sql =
    'INSERT INTO order_detail (user_id, product_id, qty, date) VALUES (?,?,?,?)'
  if (userId && productId && qty && date) {
    db.query(sql, [userId, productId, qty, date], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: err })
      }
      return res.status(200).json({ success: true, data: result })
    })
  }
}

const orderPut = (req, res) => {
  const { orderId, qty } = req.body
  let newQty = qty
  const sql = 'UPDATE order_detail SET qty=? WHERE order_id=?'
  if (orderId && qty) {
    if (qty > 9) newQty = 9
    db.query(sql, [newQty, orderId], (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

const orderDelete = (req, res) => {
  const { id } = req.params
  const sql = 'DELETE FROM order_detail WHERE order_id=?'
  if (id) {
    db.query(sql, id, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

module.exports = { orderGet, orderPost, orderPut, orderDelete }
