const mongoose=require('mongoose')
const authSechema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model('students',authSechema);