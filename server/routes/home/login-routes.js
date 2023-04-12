const router = require(`express`).Router()

router
    .route(`/`)
    .get((req, res) =>{
        res.send(`hello world!`)
    })

module.exports = router