const router = require(`express`).Router()
const loginRoutes = require(`./login-routes`)
const logoutRoutes = require(`./logout-routes`)
const registerRoutes = require(`./register-routes`)
const homepageRoutes = require(`./homepage-routes`)
const gameRoutes = require(`./game-routes`)
const saveRoutes = require(`./save-routes`)
const loadRoutes = require(`./load-routes`)

router.use(`/login`, loginRoutes)
router.use(`/logout`, logoutRoutes)
router.use(`/register`, registerRoutes)
router.use(`/`, homepageRoutes)
router.use(`/game`, gameRoutes)
router.use(`/save`, saveRoutes)
router.use(`/load`, loadRoutes)

module.exports = router