const router = require(`express`).Router()
const apiRoutes = require(`./api`)
const loginRoutes = require(`./Login`)

router.use(`/api`, apiRoutes)
router.use(`/Login`, loginRoutes)

module.exports = router