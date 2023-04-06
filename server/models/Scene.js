const { Schema, model } = require('mongoose');

const sceneSchema = new Schema({
    sceneId: { 
        type: Schema.Types.ObjectId, 
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