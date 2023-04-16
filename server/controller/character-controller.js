const {User, Character} = require(`../models`)

const characterController = {
    getAllCharacters(req, res){
        Character.find({})
        .populate(`userId`,`name password`)
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getCharacterById({params }, res) {
        Character.findOne({_id: params.id})
        .populate(`userId`,`name password`)
        .then((data) =>{
            if(!data){
                res.status(404).json({message: "There is no character with this ID"})
                return
            }
            res.json(data)
        })
    },

    createCharacter({body}, res){
        Character.create(body)
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json(err))
    }
    
}


module.exports = characterController