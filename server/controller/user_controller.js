const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

const userGet = (req, res) => {
  const sql = 'SELECT * FROM user'
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(404).json({ success: false, message: err })
    }
    return res.status(200).json({ success: true, data: result })
  })
}

const userGetEmail = (req, res) => {
  const email = req.params.email
  const sql = 'SELECT * FROM user WHERE email = ?'
  db.query(sql, email, (err, result) => {
    if (err || result.length === 0) {
      return res.status(404).json({ success: false, message: '404 Not Found' })
    }
    return res.status(200).json({ success: true, data: result })
  })
}

const userPost = (req, res) => {
  const { email, password } = req.body
  const sql = 'INSERT INTO user (email, password) VALUES (?, ?)'
  if (email && password) {
    db.query(sql, [email, password], (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

const userPut = (req, res) => {
  const { email, password } = req.body
  const sql = 'UPDATE user SET password=? WHERE email=?'
  if (email && password) {
    db.query(sql, [password, email], (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

const userDel = (req, res) => {
  const { email } = req.params
  const sql = 'DELETE FROM user WHERE id=?'
  if (email) {
    db.query(sql, email, (err, result) => {
      if (err) throw err
      return res.status(200).json({ success: true, data: result })
    })
  }
}

module.exports = {
  userGet,
  userGetEmail,
  userPost,
  userPut,
  userDel,
}
