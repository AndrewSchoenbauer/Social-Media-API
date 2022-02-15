const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thoughts');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
            }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }],
        
    },
    {
        toJSON: {
            virtuals:true,
        },
        id: false,
    }
)
const User = model('user', userSchema)
module.exports = User;