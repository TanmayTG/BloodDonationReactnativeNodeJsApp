import React from "react";
import { View,Text } from "react-native";

const LoginUnsuccess=()=>{
return(
    <View style={{alignItems:"center",backgroundColor:"pink",height:'100%'}}>
        <Text style={{fontSize:40}}>Your Username or Password is invalid</Text>
    </View>
)
}

export default LoginUnsuccess