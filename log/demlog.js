import React from "react";
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from "react-native";
// import { color } from "react-native-elements/dist/helpers";


    // constructor(props){
    // super(props)
    // this.state={
    //     username:'',
    //     password:''
    // }
    // }
    // const [Username,setUsername]=React.useState('');
    // const [checkUsername,setcheckUsername]=React.useState(true);
    // const [errUsername,seterrUsername]=React.useState('');

    // const validateUsername=()=>{
    //     var User=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2-3})+$/i;
    //     var use=Username.trim();
    //     if(use=='' || use== undefined || use == null){
    //         seterrUsername('Please enter the username');
    //         setcheckUsername(false);
    //         return false;
    //     }else if (!User.test(use)){
    //         seterrUsername('Please enter valid Email Address');
    //         setcheckUsername(false);
    //         return false;
    //     }else{
    //         seterrUsername('');
    //         setcheckUsername(true);
    //         return true;
    //     }
    // }
const LogiN = ({navigation}) =>{
return(
<View style={styles.A}>
    <View style={styles.A1}>
    <Text style={styles.B}>Login Form</Text>
    <Text style={styles.D}>People Side</Text>
    </View>
    <View style={styles.input}>
    <TextInput 
    // onChange={(value)=>this.setState({username:value})}
    style={styles.in1}
    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Username"
    />
    {/* onChangeText={setUsername}  onEndEditing={validateUsername} 
    <View style={{marginTop:5}}>
        {
            checkUsername==true ? null:<Text style={{color:'red'}}>{errUsername}</Text>
        }
    </View> */}
     <TextInput 
    //  onChange={(value)=>this.setState({password:value})}
     style={styles.in1}
    autoCapitalize="none"
    autoCorrect={false}
    secureTextEntry={true}
    placeholder="Password" />
    <TouchableOpacity 
    onPress={()=>{
       navigation.navigate('DashBoard') 
    }}
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
            navigation.navigate('People Signup')
        }}>
            <Text style={styles.s2}>Sign Up</Text>
        </TouchableOpacity>
    </View>
   {/* <Text>{'username ==>'+this.state.username}</Text>
   <Text>{'password ===>'+this.state.password}</Text> */}
</View>
);
}

const styles=StyleSheet.create({
   A:{
      paddingVertical:60,
   },
   A1: { 
       alignItems:"center",
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
    paddingLeft:5,
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
    textAlign: "center",
 },
 D:{
    fontSize:28,
},
s1:{
    textAlign:'center',
    paddingLeft:60
},
s2:{
    color:'blue',
    paddingLeft:5
 }
})

export default LogiN;