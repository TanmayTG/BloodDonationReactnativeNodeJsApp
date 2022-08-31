import React from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { toastConfig } from "../toastconfig";
// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";    

// const Login = ({navigation}) =>{
const Login = (props) =>{
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

    // const nav=async()=>{
    //     navigation.navigate('HInformations')
    // }

  
    const subh=  ()=>{
        fetch("http://192.168.43.153:3000/loghos",{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Username,
                Password
            })
          }).then(res=>res.json())
            .then(async(data)=>{



            //     console.log(data)
            //     if(data.message==='Login Successfully'){
            //     if(validateUsername()&&validatePassword()){
            //         props.navigation.navigate('HInformations')
            //     }
            // }
            // else{
            //     Toast.show({
            //                                 type:'warning',
            //                                 position:'top',
            //                                 topOffset:0,
            //                                 text1:'invalid login fields'
            //                               })
            // }






                // console.log(data.token)
                
                //  if(data.token){
                //             props.navigation.navigate('HInformations')
                //             }
                const a=data.token
                console.log('a is '+a)


                try {
                    // navigation.navigate('hInfo')
                 const token = await AsyncStorage.setItem('token',data.token)
                            
                //  const b=await AsyncStorage.getItem('token')
                //             console.log('b is ',b)
                            
                            // const c = await AsyncStorage.removeItem('token')
                            // console.log('c is ',c)
                            // if(validateUsername()&&validatePassword()){
                        // if(token){
                            props.navigation.navigate('HInformations')
                            // nav()
                        // }
                            // }
                } catch (error) {
                    console.log('error hai',error)
                    Toast.show({
                                        type:'warning',
                                        position:'top',
                                        topOffset:0,
                                        text1:'invalid login fields'
                                      })
                                     
                }
                // if(validateUsername()&&validatePassword()){
                //     navigation.navigate('hInfo')
                //   }

                
            //     if(data.message==="invalid login fields"){
            //         console.log(data)
            //     Toast.show({
            //                 type:'warning',
            //                 position:'top',
            //                 topOffset:0,
            //                 text1:'invalid login fields'
            //               })
            //     }
            //     else{
            //         console.log(data)
            //         console.log(data.token)
                    
                    
            //         Toast.show({
            //             type:'done',
            //             position:'top',
            //             topOffset:0,
            //             text1:'login successfully'
            //           })
           
            //     }
           
            })

        


        //   .then(res=>res.text())
        //   .then(resText=>{
        //     if(resText==="login_successfully"){
                // if(data){
            //     console.log(resText)
            //     if(validateUsername()&&validatePassword()){
            //         navigation.navigate('hInfo')
            //     }
            // }
            // else{
                // console.log(resText)
                // Toast.show({
                //             type:'warning',
                //             position:'top',
                //             topOffset:0,
                //             text1:'invalid login fields'
                //           })
                //         }
                        // })
    }

return(
<ScrollView keyboardShouldPersistTaps='handled'>
<View style={styles.A}>
    <Toast config={toastConfig} />
    <View style={styles.A1}>
    <Text style={styles.B}>Login Form</Text>
    <Text style={styles.D}>Hospital Side</Text>
    </View>
    <View style={styles.input}>
    <TextInput
    // onChange={(value)=>this.setState({username:value})} 
    style={styles.in1}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Username"
    name={'Username'}
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
    onChangeText={setPassword}   onEndEditing={validatePassword}
    />
    <View style={{marginTop:5}}>
        {
            checkPassword==true ? null:<Text style={{color:'red'}}>{errPassword}</Text>
        }
    </View>
    <TouchableOpacity 
    onPress={subh}
    style={styles.l}>
        <Text style={styles.l1}>Login</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity 
    style={styles.l}>
        <Text style={styles.l1}>Login</Text>
    </TouchableOpacity> */}
    </View>
    <View style={styles.n}>
        <TouchableOpacity onPress={()=>{
            props.navigation.navigate('forgeth')
        }}>
        <Text style={styles.n1}>Forget Password?</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.s}>
        <Text style={styles.s1}>Don't have an account?</Text>
        <TouchableOpacity
        onPress={()=>{
          props.navigation.navigate('Hospital Signup')
        }}>
            <Text style={styles.s2}>Sign Up</Text>
        </TouchableOpacity>
    </View>
</View>
</ScrollView>
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

export default Login;