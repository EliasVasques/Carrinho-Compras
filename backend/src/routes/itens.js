const { Router } = require('express')
const { pegarItens, addItens } = require('../controllers/itens')

const router = Router()

router.get('/', pegarItens)

router.post('/', addItens)

module.exports = router

