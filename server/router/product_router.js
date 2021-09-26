const express = require('express')
const router = express.Router()

const {
  productGet,
  productGetId,
  productGetHot,
} = require('../controller/product_controller')

router.get('/', productGet)
router.get('/:id', productGetId)
router.get('/all/hot', productGetHot)

module.exports = router
