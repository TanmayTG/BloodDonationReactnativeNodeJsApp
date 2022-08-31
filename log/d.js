import React from "react";
import {Text,View,StyleSheet, TextInput, TouchableOpacity} from "react-native";

const D = () => {
  return (
   <View style={styles.A}>
    <Text style={styles.A1}>Dashboard</Text>   
    <Text>First Name:"unknown"</Text>
    <Text>Last Name:"unknown"</Text>
    <Text>MObile No:XXXXXXXXXX</Text>
    <Text>Email:xyz@gmail.com</Text>
    <Text>Blood Group:"X"</Text>
    <Text>House No:X</Text>
    <Text>Street/village:"X"</Text>
    <Text>Landmark:"X"</Text>
    <Text>City:"X"</Text>
    <Text>Pincode:X</Text>
    <Text>State:"X"</Text>
   </View>
  );
} 
const styles=StyleSheet.create({
    A:{
    //   alignItems:"center",
    
    },   
    A1:{
       fontSize:30,
       textAlign:"center",
       margin:13,
   }
})


export default D;