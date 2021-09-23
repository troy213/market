const express = require('express')
const router = express.Router()

const {
  orderGet,
  orderGetId,
  orderPost,
  orderPut,
  orderDelete,
} = require('../controller/order_controller')

router.get('/', orderGet)
router.post('/', orderPost)
router.put('/', orderPut)
router.get('/:id', orderGetId)
router.delete('/:id', orderDelete)

module.exports = router
