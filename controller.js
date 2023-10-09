const Data=require('./authModel');

const userController=async(req,res)=>{
   
    try {
        const {name,contact,address}=req.body;
        
        let users=await new Data({name,contact,address}).save();
        res.status(201).send({
            success:true,
            message:"User saved successfully",
            users
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,message:'Error in Add data',
            error
        })
    }
}
const getAllData=async(req,res)=>{
    let users;
   try {
     users=await Data.find()
     res.status(201).send({
        success:true,message:' Data found sucessfully',
        users
     })
    
   } catch (error) {
    res.status(500).send({
        success:false,message:'No data found',
        users
     })
   }
}
const getById=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await Data.findById(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no data found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Data found with this id",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}
const updateUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        const {name,contact,address}=req.body;
        newusers=await Data.findByIdAndUpdate(id,{name,contact,address})
        users=await newusers.save()
        if(!users){
            res.status(500).send({
                success:false,
                message:"Data is not updated",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Data updated",
            users
        }) 
    } catch (error) {
        
    }
}
const deleteUsers=async(req,res)=>{
    let id=req.params.id;
    let users;
    try {
        users=await Data.findByIdAndDelete(id)
        if(!users){
            res.status(500).send({
                success:false,
                message:"no data found with this id",
    
            })
        }
        res.status(200).send({
            success:true,
            message:"Data Deleted",
            users
        })

        
    } catch (error) {
       console.log(error) 
    }
    
}

module.exports.userController=userController
module.exports.getAllData=getAllData
module.exports.getById=getById
module.exports.updateUsers=updateUsers
module.exports.deleteUsers=deleteUsers