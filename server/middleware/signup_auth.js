const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})

const signupAuth = (req, res, next) => {
  const { email } = req.body
  const sql = 'SELECT * FROM user WHERE email=?'
  if (email) {
    db.query(sql, email, (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: err })
      }
      if (result.length > 0) {
        return res
          .status(500)
          .json({ success: false, message: 'email has been already taken' })
      } else {
        next()
      }
    })
  }
}

module.exports = signupAuth
