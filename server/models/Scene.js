const { Schema, model } = require('mongoose');

const sceneSchema = new Schema({
    sceneId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Scene'
    },
    content: {

    },
    choice1: {

    },
    choice2: {

    },
    choice3: {

    },
})