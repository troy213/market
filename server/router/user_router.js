const express = require('express')
const router = express.Router()

const {
  userGet,
  userGetEmail,
  userPost,
  userPut,
  userPasswordPut,
  userDel,
  userAuth,
} = require('../controller/user_controller')

const signupAuth = require('../middleware/signup_auth')
const loginAuth = require('../middleware/login_auth')
const getUser = require('../middleware/get_user')
const passCheck = require('../middleware/pass_check')

router.get('/', userGet)
router.post('/', signupAuth, userPost)
router.post('/login', loginAuth, userAuth)
router.put('/profile', getUser, userPut)
router.put('/profile/password', getUser, passCheck, userPasswordPut)

// notused
router.get('/:email', userGetEmail)
router.delete('/:email', userDel)

module.exports = router
