const db = require('../db_config')

const getUser = (req, res, next) => {
  const { id } = req.body
  const sql = 'SELECT * FROM user WHERE user_id=?'
  db.query(sql, id, (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      res.locals.user = result[0]
      next()
    } else {
      res.status(400).json({ success: false, msg: 'user not found' })
    }
  })
}

module.exports = getUser
