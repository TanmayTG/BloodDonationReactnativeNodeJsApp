const mongoose=require('mongoose')
const RSchema=new mongoose.Schema({
    O1:{
      type:String
    },
    O2:{
        type:String
    },
    A1:{
        type:String
    },
    A2:{
        type:String
    },
    B1:{
        type:String
    },
    B2:{
        type:String
    },
    AB1:{
        type:String
    },
    AB2:{
        type:String
    }
})

const Rq=new mongoose.model('r',RSchema)
module.exports=Rq