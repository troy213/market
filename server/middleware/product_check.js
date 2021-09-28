const db = require('../db_config')

const productCheck = (req, res, next) => {
  const { productId, qty, date } = req.body
  const sql = 'SELECT * FROM order_detail WHERE user_id=? AND product_id=?'
  db.query(sql, [res.locals.user.id, productId], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      let newQty = result[0].qty + qty
      if (newQty > 9) {
        newQty = 9
      }
      const sql =
        'UPDATE order_detail SET qty=?, date=? WHERE user_id=? AND product_id=?'
      db.query(
        sql,
        [newQty, date, res.locals.user.id, productId],
        (err, result) => {
          if (err) throw err
          return res.status(200).json({ success: true, data: result })
        }
      )
    } else {
      next()
    }
  })
}

module.exports = productCheck
