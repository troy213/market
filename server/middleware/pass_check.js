const bcrypt = require('bcrypt')

const passCheck = async (req, res, next) => {
  try {
    const { oldPass } = req.body
    if (await bcrypt.compare(oldPass, res.locals.user.password)) {
      next()
    } else {
      return res
        .status(200)
        .json({ success: false, message: 'invalid password' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'failed to change password' })
  }
}

module.exports = passCheck
