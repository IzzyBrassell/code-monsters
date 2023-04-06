const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    gender: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    hp: {
        type: Number,
    },
    defense: {
        type: Number,
    },
    attack: {
        type: Number,
    },
    reputation: {
        type: Number,
    },
    sceneId: {
        type: Number,
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },


});

const Character = model('Character', userSchema);
  
  module.exports = Charecter;