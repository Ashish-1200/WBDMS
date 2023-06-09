const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const usersSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    Username:{
        type:String,
        unique: true,
        required:true,
    },
    UserType: {
        type: String,
        required:true,
    },
    
    Firstname: {
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
        required:true,
    },

    Password: {
        type:String,
        required:true,
        validate(pass){
            console.log(pass)
            if(pass.length < 8){
                throw new Error("Password > 8 characters ")
            }
        }
    },
    Email: {
        type:String,
        unique:true,
        required: true,  // Email address should be entered
        lowercase:true,  // Emails should be lowercase
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]

    },

    DateJoined: {
        type: String,
        default: new Date(),
    } ,
})

module.exports =mongoose.model("users",usersSchema)

