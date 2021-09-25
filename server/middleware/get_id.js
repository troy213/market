const db = require('../db_config')

const getEmailId = (req, res, next) => {
  const sql = 'SELECT user_id FROM user WHERE email=?'
  db.query(sql, res.locals.user.email, (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.locals.id = result[0].user_id
      next()
    }
  })
}

module.exports = getEmailId
