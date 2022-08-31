import React, { useState } from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { toastConfig } from "../toastconfig";


const Loginhos = ({navigation}) =>{
 const [Username,setUsername]=React.useState('');
 const [checkUsername,setcheckUsername]=React.useState(true);
 const [errUsername,seterrUsername]=React.useState('');

 const [Password,setPassword]=React.useState('');
 const [checkPassword,setcheckPassword]=React.useState(true); 
 const [errPassword,seterrPassword]=React.useState('');

    const validateUsername=()=>{
        var User=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
        var use=Username.trim();
        if(use=='' || use== undefined || use == null){
            seterrUsername('please enter Username');
            setcheckUsername(false);
            return false;
        }else if (!User.test(use)){
            seterrUsername('Please enter valid Username');
            setcheckUsername(false);
            return false;
        }else{
            seterrUsername('');
            setcheckUsername(true);
            return true;
        }
    }
    const validatePassword = () =>{
        // var Pass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        // var Pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9@#$%^&*?.,]{8,}$/;
        var pas=Password.trim();
        if(pas=='' || pas== undefined || pas == null){
            seterrPassword('please enter password');
            setcheckPassword(false);
            return false;
        }
        // else if (!Pass.test(pas)){
        //     seterrPassword('Password must contain 8 characters,include(A-Z,a-z,0-9,special character');
        //     setcheckPassword(false);
        //     return false;
        // }
        else{
            seterrPassword('');
            setcheckPassword(true);
            return true;
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         Username:'',
    //         Password:''
    //     }
    // }
   
  const subh=()=>{
  fetch("http://192.168.43.153:3000/loghos",{
    method:"post",
    headers:{
        'Content-Type':'application/json',
        // 'Accept':"application/json"
    },
    body:JSON.stringify({
        Username,
        Password
    })
  })
//   .then(res=>res.json())
//   .then(async(data)=>{

.then(res=>res.text())
  .then((resText)=>{

    if(resText==="Login_successfully"){
        console.log(resText)
        if(validateUsername()&&validatePassword()){
            navigation.navigate('HInformations')
        }
    }
    else{
        console.log(resText)
        Toast.show({
                    type:'warning',
                    position:'top',
                    topOffset:0,
                    text1:'invalid login fields'
                  })
        // console.log("invalid login fields")
        // navigation.navigate('Loginunsuccess')
    }


    // if(data.error){
    //     console.log('invalid login fields')
    //     Toast.show({
    //         type:'warning',
    //         position:'top',
    //         topOffset:0,
    //         text1:'invalid login fields'
    //       })
    // }else{
    //     console.log('login success')
    //     if(validateUsername()&&validatePassword()){
    //         navigation.replace('UserInformations')
    //     }
    //     Toast.show({
    //         type:'done',
    //         position:'top',
    //         topOffset:0,
    //         text1:'login success'
    //       })
    // }
//   })
  }).catch(err=>{
    console.log(err)
  })
}
//   }
return(
<View style={styles.A}>
<Toast config={toastConfig} />
    <View style={styles.A1}>
    <Text style={styles.B}>Login Form</Text>
    <Text style={styles.D}>User Side</Text>
    </View>
    <View style={styles.input}>
    <TextInput
    // onChange={(value)=>this.setState({username:value})} 
    style={styles.in1}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Username"
    name={'Username'}
    // value={Username}
    onChange={(e)=>setUsername(e.target.value)}
    onChangeText={setUsername}  onEndEditing={validateUsername}
    /> 
    <View style={{marginTop:5}}>
        {
            checkUsername==true ? null:<Text style={{color:'red'}}>{errUsername}</Text>
        }
    </View>
    <TextInput style={styles.in1}
    autoCapitalize="none"
    autoCorrect={false}
    secureTextEntry={true}
    placeholder="Password"
    name={'Password'}
    // value={Password}
    onChange={(e)=>setPassword(e.target.value)}
    onChangeText={setPassword}   onEndEditing={validatePassword}
    />
    <View style={{marginTop:5}}>
        {
            checkPassword==true ? null:<Text style={{color:'red'}}>{errPassword}</Text>
        }
    </View>
    <TouchableOpacity onPress={(subh)}
    // onPress={()=>{
    //     if(validateUsername() && validatePassword()){
    //     navigation.navigate('UserInformations') 
    //     }
    //  }}
    style={styles.l}>
        <Text style={styles.l1}>Login</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.n}>
        <TouchableOpacity>
        <Text style={styles.n1}>Forget Password?</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.s}>
        <Text style={styles.s1}>Don't have an account?</Text>
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Hospital Signup')
        }}>
            <Text style={styles.s2}>Sign Up</Text>
        </TouchableOpacity>
    </View>
</View>
);
}

const styles=StyleSheet.create({ 
   A1: { 
       alignItems:"center",
       marginTop:60
   },
   B: {
       fontSize: 40,
   },
   input:{
    alignItems:"center",
   },
   in1:{
    width:300,
    height:40,
    marginTop: 30,
    borderRadius: 10,
    paddingLeft:10,
    backgroundColor:"silver",
    fontSize:20,
    // justifyContent:"center",
    // alignItems: 'center',
   },
   l:{
    width:300,
    height:40,
    marginTop: 30,
    borderRadius: 10,
    paddingLeft:5,
    backgroundColor:"orange",
    justifyContent:"center",
    alignItems: 'center',
   },
   l1:{
       fontSize:20,
       color:'white',
   },
   n:{
       justifyContent:"center",
       alignItems:"center",
       margin: 20,
   },
   n1:{
      color:"orange",
   },
   s:{
    flexDirection:'row',
    // color:"orange",
    paddingLeft:60
 },
   D:{
       fontSize:28,
   },
   s1:{
       textAlign:'center'
   },
   s2:{
      color:'blue',
      paddingLeft:5
   }
})

export default Loginhos;