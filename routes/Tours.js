const express = require('express')
const router = express.Router()

const ControllersTours = require('../controllers/Tours')

router.get('/', ControllersTours.findAll)
router.get('/:id', ControllersTours.findById)
router.post('/', ControllersTours.create)
router.delete('/:id', ControllersTours.removeTour)

module.exports = router
