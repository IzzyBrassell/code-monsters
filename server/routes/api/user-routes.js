const router = require(`express`).Router()
const connection = require(`../../config/connection`)
const {User, Character} = require(`../../models`)

router.get(`/`, async (req, res) => {
    const userData = await User.find()
    res.send(userData)
})


module.exports = router