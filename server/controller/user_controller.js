const db = require('../db_config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

const userPost = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const sql = 'INSERT INTO user (email, password) VALUES (?, ?)'
    if (email && hashedPassword) {
      db.query(sql, [email, hashedPassword], (err, result) => {
        if (err) throw err
        return res.status(201).json({ success: true, data: result })
      })
    }
  } catch {
    res.status(500).json({ success: false, message: 'failed to sign up' })
  }
}

const userAuth = async (req, res) => {
  try {
    if (await bcrypt.compare(res.locals.password, res.locals.hashedPassword)) {
      const user = {
        id: res.locals.id,
        email: res.locals.email,
        name: res.locals.name,
        address: res.locals.address,
        phone: res.locals.phone,
      }

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      return res
        .status(200)
        .json({ success: true, data: accessToken, message: 'success' })
    } else {
      return res
        .status(200)
        .json({ success: false, message: 'invalid email or password' })
    }
  } catch {
    res.status(500).json({ success: false, message: 'failed to sign in' })
  }
}

const userPut = (req, res) => {
  const { id, name, address, phone } = req.body
  if (id && name) {
    const sql = 'UPDATE user SET name=? WHERE user_id=?'
    db.query(sql, [name, id], (err, result) => {
      if (err) throw err
      const user = {
        id: id,
        email: res.locals.user.email,
        name: name,
        address: res.locals.user.address,
        phone: res.locals.user.phone,
      }

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      return res.status(200).json({ success: true, data: accessToken })
    })
  } else if (id && address) {
    const sql = 'UPDATE user SET address=? WHERE user_id=?'
    db.query(sql, [address, id], (err, result) => {
      if (err) throw err
      const user = {
        id: id,
        email: res.locals.user.email,
        name: res.locals.user.name,
        address: address,
        phone: res.locals.user.phone,
      }

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      return res.status(200).json({ success: true, data: accessToken })
    })
  } else if (id && phone) {
    const sql = 'UPDATE user SET phone=? WHERE user_id=?'
    db.query(sql, [phone, id], (err, result) => {
      if (err) throw err
      const user = {
        id: id,
        email: res.locals.user.email,
        name: res.locals.user.name,
        address: res.locals.user.address,
        phone: phone,
      }

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      return res.status(200).json({ success: true, data: accessToken })
    })
  } else {
    return res
      .status(400)
      .json({ success: false, message: 'there is empty field' })
  }
}

const userPasswordPut = async (req, res) => {
  try {
    const { id, newPass } = req.body
    const hashedPassword = await bcrypt.hash(newPass, 10)
    const sql = 'UPDATE user SET password=? WHERE user_id=?'
    if (id && hashedPassword) {
      db.query(sql, [hashedPassword, id], (err, result) => {
        if (err) throw err
        return res.status(200).json({ success: true, data: result })
      })
    }
  } catch {
    res
      .status(500)
      .json({ success: false, message: 'failed to change password' })
  }
}

const userDel = (req, res) => {
  const { email } = req.params
  const sql = 'DELETE FROM user WHERE user_id=?'
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
  userPasswordPut,
  userDel,
  userAuth,
}
