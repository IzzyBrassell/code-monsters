const router = require(`express`).Router()
const apiRoutes = require(`./api`)
const loadRoutes = require(`./load.js`)

router.use(`/api`, apiRoutes)
router.use(`/load`, loadRoutes)

module.exports = router