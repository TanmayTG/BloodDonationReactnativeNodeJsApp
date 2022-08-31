const express=require('express');
const bcrypt=require('bcrypt')
// const jwt=require('jsonwebtoken')
const app=express();
// const bodyParser =require('body-parser')
require("./db/connect")
const Registered=require("./models/register")
const Register=require("./models/registeruser")
const Registereu=require("./models/registeruse")
const Regist=require("./models/regisu")
const requireToken=require('./middleware/requireToken')
const requireToken1=require('./middleware/requireToken1')
// const DBlood=require("./models/DB");
const DRegister = require('./models/DB');
const PRegister = require('./models/NB');
const DBRegister = require('./models/DB');
const PBRegister = require('./models/NB');
const DBGRegister = require('./models/DBG');
const Nregist = require('./models/NBG');
const NB=require('./models/NB')
const { default: mongoose } = require('mongoose');
const Av = require('./models/Avail');
const Rq = require('./models/req');
const port=3000;

app.use(express.json());
// app.use(bodyParser.json())

var userId;

app.get('/',(req,res)=>{
    res.send('hello')
})

app.post('/register',async(req,res)=>{
    try{
      const Password=req.body.Password;
      const ConfirmPassword=req.body.ConfirmPassword;
      if(Password===ConfirmPassword){
        const registerU = new Registered({
        Name : req.body.Name,
        MobileNo : req.body.MobileNo,
        Username : req.body.Username,
        BloodGroup : req.body.BloodGroup,
        HNo : req.body.HNo,
        Street : req.body.Street,
        Landmark : req.body.Landmark,
        City : req.body.City,
        Pincode : req.body.Pincode,
        State : req.body.State,
        Password : Password,
        ConfirmPassword : ConfirmPassword
        })
        const registers = await registerU.save();
        res.send(registers);
      }else{
        res.send('passwords are not matching')
      }
    }catch(error){
        res.send(error)
    }
})

app.post('/registeru',async(req,res)=>{
  try{
    const Password=req.body.Password;
    const ConfirmPassword=req.body.ConfirmPassword;
    if(Password===ConfirmPassword){
      const registerUser = new Register({
          HName : req.body.HName,
          MobileNo : req.body.MobileNo,
          Username : req.body.Username,
          // BloodGroup : req.body.BloodGroup,
          Street : req.body.Street,
          City : req.body.City,
          Pincode : req.body.Pincode,
          State : req.body.State,
          Password : Password,
          ConfirmPassword : ConfirmPassword
      })
      
      const register = await registerUser.save();
      res.send(register)

    }else{
      res.send("passwords are not matching")
    }
  }catch(error){
      res.status(400).send(error);
  }
})

app.post('/registeruse',async(req,res)=>{
  try{
    const Password=req.body.Password;
    const ConfirmPassword=req.body.ConfirmPassword;
    if(Password===ConfirmPassword){
      const registerUser = new Registereu({
          HName : req.body.HName,
          MobileNo : req.body.MobileNo,
          Username : req.body.Username,
          // BloodGroup : req.body.BloodGroup,
          Street : req.body.Street,
          City : req.body.City,
          Pincode : req.body.Pincode,
          State : req.body.State,
          Password : Password,
          ConfirmPassword : ConfirmPassword
      })
      
      const token = await registerUser.generateAuthToken();
      console.log('the token part'+token);

      const registerus = await registerUser.save();
      // res.send(registerus)
      res.send("Registered_successfully")

    }else{
      res.send("passwords_are_not_matching")
    }
  }catch(error){
      res.status(400).send(error);
  }
})

app.post('/regisu',async(req,res)=>{
  try{
    const Password=req.body.Password;
    const ConfirmPassword=req.body.ConfirmPassword;
    if(Password===ConfirmPassword){
      const registU = new Regist({
      Name : req.body.Name,
      MobileNo : req.body.MobileNo,
      Username : req.body.Username,
      BloodGroup : req.body.BloodGroup,
      HNo : req.body.HNo,
      Street : req.body.Street,
      Landmark : req.body.Landmark,
      City : req.body.City,
      Pincode : req.body.Pincode,
      State : req.body.State,
      Password : Password,
      ConfirmPassword : ConfirmPassword
      })

      const token = await registU.generateAuthTokenU();
      console.log('the token part '+token);


      const regist = await registU.save();
      // res.send(regist);
      res.send("Registered_successfully")
    }else{
      res.send('passwords_are_not_matching')
    }
  }catch(error){
      res.send(error)
  }
})

// login check
app.post("/log",async(req,res)=>{
  try{
    const Username=req.body.Username;
    const Password=req.body.Password;

    
    const Useremail = await Regist.findOne({Username:Username});

    const isMatch = await bcrypt.compare(Password,Useremail.Password);
    
    const token = await Useremail.generateAuthTokenU();
    console.log('the token part '+token);



    // res.send(Useremail.Password);
    // console.log(Useremail);
    // const login='login_successfully'
    // const invalid='invalid_login_fields'
    // if(Useremail.Password===Password){
      if(isMatch){
        res.json({token})
      // res.send("login_successfully")
      // console.log("login success")
      // res.send(Useremail)
      // console.log(Useremail)
    }else{
      res.json({message:'invalid login fields'})
      // res.send("invalid_login_fields")
      // console.log("invalid password")
    }

    // console.log(`${Username} and password is ${Password}`)
  }catch(error){
    res.json({message:'invalid login fields'})
    // res.send("invalid_login_fields")
    // console.log('invalid')
  }
})

app.post('/loghos',async(req,res)=>{
  try{
    const Username=req.body.Username;
    const Password=req.body.Password;

    const Useremail = await Registereu.findOne({Username:Username});

    const isMatch = await bcrypt.compare(Password,Useremail.Password);
    
    const token = await Useremail.generateAuthToken();
    console.log('the token part '+token);
    
    if(isMatch){
      // res.json({message:"Login Successfully"})
      res.json({token})
      // res.send('Login_successfully')
    }else{
      // res.send('invalid_login_fields')
      res.json({message:'invalid login fields'})
    }
  }catch(error){
    // res.send('invalid_login_fields')
    res.json({message:'invalid login fields'})
  }
})

app.get('/loghos',requireToken,(req,res)=>{
  const Hname=req.user.HName;
  const Email=req.user.Username;
  const Mob=req.user.MobileNo;
  res.status(200).json({Hname,Email,Mob})
})

app.get('/log',requireToken1,(req,res)=>{
  const Name=req.user.Name;
  const Email=req.user.Username;
  const Mob=req.user.MobileNo;
  res.status(200).json({Name,Email,Mob})
})

// app.post('/DoBlood',async(req,res)=>{
//   try {
//     const DName=req.body.DName;
//     const DMob=req.body.DMobileNo;
//     const DEmail=req.body.DEmail;
//     const DBG=req.body.DBGroup;

//     const registerDonor = new DBGRegister({
//       DName:DName,
//       DMob:DMob,
//       DEmail:DEmail,
//       DBG:DBG
//     })

//     const DBresgister = await registerDonor.save();
//     res.send('saved')
//     console.log('saved')
//   } catch (error) {
//     res.send(error)
//   }
// })

app.post("/DBlood",async(req,res)=>{
  try {
    
  const DName=req.body.DName
  const DMobileNo=req.body.DMobileNo
  const DEmail=req.body.DEmail
  const DBGroup=req.body.DBGroup
  const Dregist=new DBGRegister({
    DName:DName,
    DMobileNo:DMobileNo,
    DEmail:DEmail,
    DBGroup:DBGroup
})

// const token = await Dregist.generateAuthTokenU();
//       console.log('the token part '+token);

  const RegistDon=await Dregist.save();
  res.send("saved") 
  console.log("saved")
  } catch (error) {
  res.send(error)
  }
})


// app.post('/NBlood',async(req,res)=>{
//   try {
//     const RegisterAccept=new Nregist({
//       PName:req.body.PName,
//       PMobileNo:req.body.PMobileNo,
//       PEmail:req.body.PEmail,
//       PBGroup:req.body.PBGroup
//     })
//     const registerAccp= await RegisterAccept.save()
//     res.send("saved")
//     console.log("saved")
//   } catch (error) {
//     res.send(error)
//   }
// })

app.post('/NBlood',async(req,res)=>{
  try {
    const PName=req.body.PName
    const PMobileNo=req.body.PMobileNo
    const PEmail=req.body.PEmail
    const PBGroup=req.body.PBGroup
  const NPBLood=new NB({
    PName:PName,
    PMobileNo:PMobileNo,
    PEmail:PEmail,
    PBGroup:PBGroup
  })
  // const token = await NPBLood.generateAuthTokenU();
  //     console.log('the token part '+token);
  const NBL=await NPBLood.save()
  res.send('saved')
  console.log('saved')
} catch (error) {
    res.send(error)
    console.log(error)
}
})

app.post('/avilable',async(req,res)=>{
  try {
    const Ava=new Av({
      O1:req.body.O1,
      O2:req.body.O2,
      A1:req.body.A1,
      A2:req.body.A2,
      B1:req.body.B1,
      B2:req.body.B2,
      AB1:req.body.AB1,
      AB2:req.body.AB2
    })
    const AVal=await Ava.save()
    res.send("update")
    console.log("update")
  } catch (error) {
    res.send(error)
    console.log(error)
  }
})

app.post('/require',async(req,res)=>{
  try {
    const RQr=new Rq({
      O1:req.body.O1,
      O2:req.body.O2,
      A1:req.body.A1,
      A2:req.body.A2,
      B1:req.body.B1,
      B2:req.body.B2,
      AB1:req.body.AB1,
      AB2:req.body.AB2
    })
    const RORM=await RQr.save()
    res.send("update")
    console.log("update")
  } catch (error) {
    res.send(error)
    console.log(error)
  }
})
  // app.post('/NBlood',async(req,res)=>{
  //   try {
  //   const PName=req.body.PName
  //   const PMobileNo=req.body.PMobileNo
  //   const PEmail=req.body.PEmail
  //   const PBGroup=req.body.PBGroup
  //   const NPregist=new Nregist({
  //        PName:PName,
  //        PMobileNo:PMobileNo,
  //        PEmail:PEmail,
  //        PBGroup:PBGroup
  //   })
  //   const Pregist=new NPregist.save();
  //   res.send('saved')
  //   console.log('saved')
  // } catch (error) {
  //     console.log(error)
  // }
  // })

  // Regist.findOne().then(data=>{
  //   res.json([data.Name,data.Username,data.BloodGroup])
    // res.send(data)
//   }).catch(err=>{
//     res.json(err)
//     console.log(err)
//   })
// })

app.listen(port,()=>{
    console.log("server is running")
})
