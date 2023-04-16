const router = require(`express`).Router()
const characterRoutes = require(`./character-routes`)
const userRoutes = require(`./user-routes`)


router.use(`/users`, userRoutes)
router.use(`/characters`, characterRoutes)


module.exports = router