const { Router } = require('express')
const { pegarItens } = require('../controllers/itens')

const router = Router()

router.get('/', pegarItens)

module.exports = router

