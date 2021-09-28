const express = require('express')
const router = express.Router()

const {
  orderGet,
  orderPost,
  orderPut,
  orderDelete,
} = require('../controller/order_controller')
const tokenAuth = require('../middleware/token_auth')
const productCheck = require('../middleware/product_check')

router.get('/', orderGet)
router.post('/', tokenAuth, productCheck, orderPost)
router.put('/', orderPut)
router.delete('/:id', orderDelete)

module.exports = router
