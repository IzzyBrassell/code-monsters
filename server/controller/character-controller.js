const {User, Character} = require(`../models`)

const characterController = {
    getAllCharacters(req, res){
        Character.find({})
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err)
            res.status(400).json(err)
        })
    },
    getCharacterById(req, res) {
        Character.findById(characterId).populate('user').exec(function (err, character) {
            if (err) throw err;
          
            // The character object will now have a populated 'user' field.
            console.log(character.user);
          });
    }
}


module.exports = characterController