const router = require(`express`).Router()
const {User, Character} = require(`../models`)

router
    .route(`/`)
    .post((req, res) =>{
        const {usernameInput, passwordInput} = req.body
        const user = User.findOne({usernameInput, passwordInput})
        if(user) {
            req.session.userId = user._id

            res.redirect(`/CC`)
        }else {
            res.render(`login`, {error: `Invalid email or password`})
        }
    })

module.exports = router