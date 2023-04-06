const { Schema, model } = require('mongoose');

const sceneSchema = new Schema({
    sceneId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Scene'
        //This is not how object id works, object id is automatically made when you seed the schema 
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


// Scene needs to Reference itself with a Results portion. 
//The results of your choice are going to be revealed on the next page we either need a results schema that identifies itself based on the choice of a specific scene
// OR we need to have a way for Scene to incorporate these results and push it into the body of content for the next Scene