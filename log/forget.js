import React from "react";
import { View,Text, TextInput, TouchableOpacity } from "react-native";

const Forget=()=>{
    return(
        <View style={{backgroundColor:'silver',height:'100%'}}>
            <Text style={{textAlign:'center',marginBottom:20,marginTop:20,fontSize:30,color:"blue"}}>Forget Password</Text>
            <Text style={{margin:5,fontSize:20}}>Email:</Text>
            <TextInput placeholder="Enter your Email" style={{margin:5,borderRadius:10,fontSize:20,backgroundColor:'white',padding:5,height:40}}></TextInput>
            <TouchableOpacity style={{alignSelf:'center',marginTop:50,backgroundColor:'orange',width:200,height:40,borderRadius:10,borderColor:'black'}}>
                <Text style={{fontSize:20,textAlign:'center',paddingTop:7}}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Forget