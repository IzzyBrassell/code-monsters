const router = require(`express`).Router()

router
    .route(`/`)
    .get((req,res) => {
        res.send(`${__dirname}/../client/build`)
    })

module.exports = router
