const express = require('express')
const router = express.Router()

const { productGet, productGetId } = require('../controller/product_controller')

router.get('/', productGet)
router.get('/:id', productGetId)

module.exports = router
