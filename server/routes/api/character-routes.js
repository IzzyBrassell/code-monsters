const router = require(`express`).Router()
const {User, Character} = require(`../../models`)

router.get(`/`, (req, res) => {
    Character.find({})
    .then((data) => res.json(data))
})

module.exports = router