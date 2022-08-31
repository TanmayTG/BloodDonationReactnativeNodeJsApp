import React from "react";
import {View,Text,TouchableOpacity,StyleSheet, ScrollView} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

const UserData=({navigation})=>{
    return(
    <View style={styles.A}>
        <Text style={styles.A1}>Blood Requirement</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('Blood Requirement IIM')}}>
            <Text style={styles.A2}>IIM Bhopal</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('Blood Requirement AIIMS')}}>
            <Text style={styles.A2}>AIIMS Bhopal</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('Blood Requirement City Hospital')}}>
            <Text style={styles.A2}>City Hospital Bhopal</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('Blood Requirement Govt. Hospital')}}>
            <Text style={styles.A2}>Govt. Hospital Bhopal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('User')}}>
            {/* <Text>click here</Text> */}
        </TouchableOpacity>
       
    </View>
    );
}

const styles=StyleSheet.create({
     A:{
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8fcbbc',
        height:"100%"
     },
     A1:{
         backgroundColor:'pink',
         padding:5,
        //  marginTop:10,
         width:'100%',
         textAlign:'center',
        //  borderRadius:10,
         fontSize:30
     },
     A2:{
        width:300,
        padding:10,
        margin:20,
        borderRadius:10,
        backgroundColor:'red',
        textAlign:'center',
        color:'white'
    }
})

export default UserData;