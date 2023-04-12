const router = require(`express`).Router()
const {User, Character} = require(`../../models`)

const {
    getAllCharacters,
    getCharacterById
} = require(`../../controller/character-controller`)

router
    .route(`/`)
    .get(getAllCharacters)

router
    .route(`:id`)
    .get(getCharacterById)

module.exports = router