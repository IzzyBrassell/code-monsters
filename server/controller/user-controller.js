const {User, Character} = require(`../models`)

const userController = {
    getAllUsers(req, res){
        User.find({})
        .populate(`character`, `name gender class hp defense attack reputation`)
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    getUserById({ params} ,res) {
        User.findOne({_id: params.id})
        .populate(`character`, `name gender class hp defense attack reputation`)
        .then((data) => {
            if(!data){
                res.status(404).json({message: "There is no user with this ID"})
                return
            }
            res.json(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createUser({body}, res){
        User.create(body)
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(err))
    },
}



module.exports = userController