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
            
            // const validPassword = await bcrypt.compareSync(hashedPW , userData.password)
            const validPassword = await userData.isCorrectPassword(req.body.password)
            
            if(!validPassword){
                res.status(400).json({message: `Incorrect email or password, please try again`})
                return;
            }


            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                res.json({ user: userData, message: 'You are now logged in!' });
              });
              return;

        } catch (err) {
            console.error(err)
            return res.status(500).json({message: 'failure to login'})
        }
    },
    logoutUser (req, res) {
        console.log(`boolean` , req.session.logged_in)
        console.log(`id` , req.session.user_id)
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