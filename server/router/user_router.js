const express = require('express')
const router = express.Router()

const {
  userGet,
  userGetEmail,
  userPost,
  userPut,
  userDel,
} = require('../controller/user_controller')

router.get('/', userGet)
router.get('/:email', userGetEmail)
router.post('/', userPost)
router.put('/', userPut)
router.delete('/:email', userDel)

module.exports = router
