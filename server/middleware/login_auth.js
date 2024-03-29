const db = require('../db_config')

const loginAuth = (req, res, next) => {
  const { email, password } = req.body
  const sql = 'SELECT * FROM user WHERE email=?'
  db.query(sql, email, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: err })
    }
    if (result.length > 0) {
      res.locals.id = result[0].user_id
      res.locals.email = email
      res.locals.name = result[0].name
      res.locals.address = result[0].address
      res.locals.phone = result[0].phone
      res.locals.password = password
      res.locals.hashedPassword = result[0].password
      next()
    } else {
      return res
        .status(200)
        .json({ success: false, message: 'invalid email or password' })
    }
  })
}

module.exports = loginAuth
