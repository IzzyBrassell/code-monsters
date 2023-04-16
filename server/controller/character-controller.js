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

    async updateCharacter(req, res){
        req.session.char_name = req.body.name
        req.session.gender = req.body.gender
        req.session.class = req.body.ability
        if(req.body.trait == `Sturdy`){
            req.session.hp += 2
            req.session.defense -= 2
        }else if (req.body.trait == `Springy`){
            req.session.hp -= 2
            req.session.defense += 2
        }else if (req.body.trait == `Frail`){
            req.session.hp -= 2
            req.session.defense -= 2
        }
        if(req.body.url.slice(0,2)==`/S`){
            req.session.sceneId = req.body.url
        }
        const charData = await Character.findOne({_id: req.session.char_id})
        charData.name = req.session.char_name
        charData.gender = req.session.gender
        charData.class = req.session.class
        charData.hp = req.session.hp
        charData.defense = req.session.defense
        charData.attack = req.session.attack
        charData.reputation = req.session.reputation
        charData.sceneId = req.session.sceneId
        await charData.save()
        res.send(`/S1`)
    }
    
}


module.exports = characterController