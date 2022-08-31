const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const DBSchema=new mongoose.Schema({
    DName:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    DMobileNo:{
        type:String,
        required:true,
        unique:true,
        match:/^([0-9]{10})$/
    },
    DEmail:{
        type:String,
        required:true,
        unique:true,
        match:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i
    },
    DBGroup:{
        type:String,
        required:true,
        match:/^([A-Z]{1,2})+([+-]{1})$/
    }
})

const DBRegister=new mongoose.model('DBblood',DBSchema)
module.exports=DBRegister