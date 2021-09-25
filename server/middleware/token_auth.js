const jwt = require('jsonwebtoken')
require('dotenv').config()

const tokenAuth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null)
    return res.status(401).json({ success: false, message: 'not authorized' })

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'invalid token' })
    }
    res.locals.user = user
    next()
  })
}

module.exports = tokenAuth
