const express = require('express')
const router = express.Router()

const {
  userGet,
  userGetEmail,
  userPost,
  userPut,
  userDel,
  userAuth,
} = require('../controller/user_controller')

const signupAuth = require('../middleware/signup_auth')
const loginAuth = require('../middleware/login_auth')

router.get('/', userGet)
router.post('/', signupAuth, userPost)
router.post('/login', loginAuth, userAuth)

// notused
router.get('/:email', userGetEmail)
router.put('/', userPut)
router.delete('/:email', userDel)

module.exports = router
