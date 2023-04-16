const router = require(`express`).Router()
const {User, Character} = require(`../models`)

router
    .route(`/`)
    .get((req,res)=>{
        res.redirect(req.session.sceneId)
    })

module.exports = router