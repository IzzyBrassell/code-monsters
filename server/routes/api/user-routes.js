const router = require(`express`).Router()
const {User, Character} = require(`../../models`)

const {
    getAllUsers,
    getUserById,
    createUser
} = require(`../../controller/user-controller`)

router
    .route(`/`)
    .get(getAllUsers)
    .post(createUser)

router
    .route(`/:id`)
    .get(getUserById)

module.exports = router