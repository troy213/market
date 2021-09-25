const db = require('../db_config')

const productGet = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    const sql = 'SELECT * FROM product'
    db.query(sql, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  } else {
    const { categories, search } = req.query
    if (categories && search) {
      const sql = `SELECT * FROM product WHERE name LIKE '%${search}%' AND categories LIKE '${categories}'`
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    } else if (categories) {
      const sql = `SELECT * FROM product WHERE categories LIKE '${categories}'`
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    } else if (search) {
      const sql = `SELECT * FROM product WHERE name LIKE '%${search}%'`
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    }
  }
}

const productGetId = (req, res) => {
  const { id } = req.params
  const sql = 'SELECT * FROM product WHERE product_id=?'
  db.query(sql, id, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
}

module.exports = { productGet, productGetId }
