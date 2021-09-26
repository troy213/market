const express = require('express')
const router = express.Router()

const {
  orderGet,
  orderGetId,
  orderPost,
  orderPut,
  orderDelete,
} = require('../controller/order_controller')
const tokenAuth = require('../middleware/token_auth')
const getEmailId = require('../middleware/get_id')
const productCheck = require('../middleware/product_check')

router.get('/', orderGet)
router.get('/cart', tokenAuth, getEmailId, orderGetId)
router.post('/', tokenAuth, getEmailId, productCheck, orderPost)
router.put('/', orderPut)
router.delete('/:id', orderDelete)

module.exports = router
