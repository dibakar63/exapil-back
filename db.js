const mongoose=require('mongoose');

const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://dibakardey63:OaGU4yXqRFudy14L@recipes.rglhoml.mongodb.net/task')
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDb