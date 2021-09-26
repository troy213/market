const db = require('../db_config')

const productGet = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    const sql = 'SELECT * FROM product'
    db.query(sql, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  } else {
    const { categories, search, sort } = req.query
    if (categories && search) {
      let sql = `SELECT * FROM product WHERE name LIKE '%${search}%' AND categories LIKE '${categories}'`
      if (sort) {
        if (sort.toUpperCase() === 'ASC' || sort.toUpperCase() === 'DESC')
          sql = `SELECT * FROM product WHERE name LIKE '%${search}%' AND categories LIKE '${categories}' ORDER BY price ${sort}`
      }
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    } else if (categories) {
      let sql = `SELECT * FROM product WHERE categories LIKE '${categories}'`
      if (sort) {
        if (sort.toUpperCase() === 'ASC' || sort.toUpperCase() === 'DESC')
          sql = `SELECT * FROM product WHERE categories LIKE '${categories}' ORDER BY price ${sort}`
      }
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    } else if (search) {
      let sql = `SELECT * FROM product WHERE name LIKE '%${search}%'`
      if (sort) {
        if (sort.toUpperCase() === 'ASC' || sort.toUpperCase() === 'DESC')
          sql = `SELECT * FROM product WHERE name LIKE '%${search}%' ORDER BY price ${sort}`
      }
      db.query(sql, (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    } else if (sort) {
      let sql = `SELECT * FROM product`
      if (sort.toUpperCase() === 'ASC' || sort.toUpperCase() === 'DESC')
        sql = `SELECT * FROM product ORDER BY price ${sort}`
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

const productGetHot = (req, res) => {
  const sql = 'SELECT * FROM product WHERE hot=1'
  db.query(sql, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
}

module.exports = { productGet, productGetId, productGetHot }
