const { Schema, model } = require('mongoose');
const connection = require(`../config/connection`)
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    character: {
      type: Schema.Types.ObjectId,
      ref: `Character`,
      default: null
    },
  });
  
  // set up pre-save middleware to create password
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;