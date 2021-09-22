const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

const productGet = (req, res) => {
  if (Object.keys(req.query).length === 0) {
    const sql = 'SELECT * FROM product'
    db.query(sql, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  } else {
    const { search } = req.query
    const sql = `SELECT * FROM product WHERE name LIKE '%${search}%'`
    db.query(sql, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

const productGetId = (req, res) => {
  const { id } = req.params
  const sql = 'SELECT * FROM product WHERE id=?'
  db.query(sql, id, (err, result) => {
    if (err) throw err
    return res.status(200).json({ success: true, data: result })
  })
}

module.exports = { productGet, productGetId }
