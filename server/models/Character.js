const { Schema, model } = require('mongoose');
const connection = require(`../config/connection`)

const characterSchema = new Schema({
    name: {
        type: String,
        default: ``
    },
    gender: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    },
    hp: {
        type: Number,
        default: 10
    },
    defense: {
        type: Number,
        default: 10
    },
    attack: {
        type: Number,
        default: 10
    },
    reputation: {
        type: Number,
        default: 0
    },
    sceneId: {
        type: String,
        default: null
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        default: null
    }
});

const Character = model('Character', characterSchema);
  
module.exports = Character;
