const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
    gender: {
        type: String,
    },
    class: {
        type: String,
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
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});

const Character = model('Character', characterSchema);
  
module.exports = Character;