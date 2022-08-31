const mongoose=require("mongoose")
const NeedSchema=new mongoose.Schema({
    PName:{
        type:String,
        required:true,
        match:/^([A-Za-z ]{3,})$/
    },
    PMobileNo:{
        type:String,
        required:true,
        match:/^([0-9]{10})$/
    },
    PEmail:{
        type:String,
        required:true,
        match:/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i
    },
    PBGroup:{
        type:String,
        required:true,
        match:/^([A-Z]{1,2})+([+-]{1})$/
    },
    // tokens:[{
    //     token:{
    //         type:String,
    //         // required:true
    //     }
    // }]
})

// DBGschema.methods.generateAuthToken = async function(){
//     try {
//         const token = jwt.sign({_id:this._id.toString()},"iamthebestintheworldandnooneisbetterthani");
//         this.tokens=this.tokens.concat({token:token})
//         await this.save();
//         return token;
//     } catch (error) {
//         res.send("the error part"+error)
//         console.log("the error part"+error)
//     }
// }


const NB=new mongoose.model('PBBlood',NeedSchema)
module.exports=NB