const router = require(`express`).Router()

router
    .route(`/`)
    .get((req,res)=>{
        res.redirect(req.session.sceneId)
    })

module.exports = router