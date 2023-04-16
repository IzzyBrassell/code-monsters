const {User, Character} = require(`../models`)
const bcrypt = require(`bcrypt`)

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

   async createUser({body}, res){
        try {
            const password = body.password
            const username = body.name
            const newUser = new User({
                name: username,
                password: password,

            });
            await newUser.save();
            res.status(201).json({message: 'User Created Successfully'})

        } catch (err) {
            console.error(err)
            return res.status(500).json({message: 'failure to create user'})
        }
    },

    async loginUser(req, res){
        try{
            const userData = await User.findOne({name: req.body.name})

            if(!userData){
                res.status(400).json({message: `Incorrect email or password, please try again`})
                return;
            }
            
            const validPassword = await userData.isCorrectPassword(req.body.password)
            
            if(!validPassword){
                res.status(400).json({message: `Incorrect email or password, please try again`})
                return;
            }

            if (req.session) {
                req.session.user_id = userData.id
                req.session.logged_in = true
                req.session.save(()=> {
                    res.json({user:userData, message: `You are now logged in!`})
                })
            }

            var charData = await Character.findOne({userId: req.session.user_id})
            if(charData == null){
                const newChar = new Character({
                    userId: req.session.user_id 
                })
                const savedChar = await newChar.save()
                userData.character = savedChar.id
                await userData.save()
            }
            if (req.session) {
                req.session.char_id = charData.id
                req.session.char_name = charData.name
                req.session.gender = charData.gender
                req.session.class = charData.class
                req.session.hp = charData.hp
                req.session.defense = charData.defense
                req.session.attack = charData.attack
                req.session.reputation = charData.reputation
                req.session.sceneId = charData.sceneId
                req.session.save(()=>{})
            }
        } catch (err) {
            console.error(err)
            return res.status(500).json({message: 'failure to login'})
        }
        
    },
    logoutUser (req, res) {
        if (req.session.logged_in) {
            req.session.destroy(() => {
              res.status(204).end();
            });
          } else {
            res.status(404).end();
          }
    }
}



module.exports = userController