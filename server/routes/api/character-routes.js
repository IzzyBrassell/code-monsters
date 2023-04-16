const router = require(`express`).Router()
const {User, Character} = require(`../../models`)

const {
    getAllCharacters,
    getCharacterById,
    updateCharacter
} = require(`../../controller/character-controller`)

router
    .route(`/`)
    .get(getAllCharacters)
    .put(updateCharacter)

router
    .route(`/:id`)
    .get(getCharacterById)

module.exports = router