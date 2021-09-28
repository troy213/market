const db = require('../db_config')

const getOrder = (req, res, next) => {
  const sql = `SELECT order_detail.order_id, order_detail.user_id, product.product_id, product.name, product.price, product.image, order_detail.qty FROM order_detail INNER JOIN product ON order_detail.product_id=product.product_id WHERE user_id=?`
  db.query(sql, res.locals.user.id, (err, result) => {
    if (err) throw err
    res.locals.data = result
    if (result.length > 0) {
      res.locals.total = result.reduce((acc, { price, qty }) => {
        return acc + price * qty
      }, 0)
      next()
    } else {
      res.locals.total = 0
      next()
    }
  })
}

module.exports = getOrder
