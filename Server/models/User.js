const mongoose = require('mongoose')

const{ Schema }=mongoose;
//extracting schema from mongoose to use in structuring 
const UserSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        Default:Date.now
    }
});
module.exports = mongoose.model('user',UserSchema)//a collection named user will be created in our 
//database named user on running this line