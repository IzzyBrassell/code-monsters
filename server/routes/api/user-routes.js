const router = require(`express`).Router()
const {User, Character} = require(`../../models`)

const {
    getAllUsers,
    getUserById,
    createUser,
    loginUser,
    logoutUser
} = require(`../../controller/user-controller`)


router
    .route(`/`)
    .get(getAllUsers)

router
    .route(`/login`)
    .post(loginUser)

router
    .route(`/signup`)
    .post(createUser)

router
    .route(`/:id`)
    .get(getUserById)


router
    .route('/logout')
    .post(logoutUser)

module.exports = router