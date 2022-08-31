import React, { useEffect, useState } from "react";
import {View,Text, TouchableOpacity,StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";
 
const UserData=({navigation})=>{

    const[Name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const[Mob,setMob]=useState('')

    useEffect(()=>{
        const fetchData=async()=>{
            const token=await AsyncStorage.getItem('token1')
         fetch("http://192.168.43.153:3000/log",{
         headers:new Headers({
             "Authorization":"Bearer "+ token
         })
          }).then(res=>res.json())
          .then(data=>{
            console.log(data)
            setName(data.Name)
            setEmail(data.Email)
            setMob(data.Mob)
        })
    }
    fetchData();
        },[])
    return(
    <View style={styles.A}>
        <View style={styles.B}>
        <Text style={styles.A1}>User Data</Text>
        </View>
        <Text style={styles.A2}>User Name:{Name}</Text>
        <Text style={styles.A2}>User Email:{Email}</Text>
        <Text style={styles.A2}>User MobileNo:{Mob}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('User')}}>
            {/* <Text>click here</Text> */}
        </TouchableOpacity>
    </View>
    );
}

const styles=StyleSheet.create({
     A:{
        // justifyContent:'center',
        // alignItems:'center',
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
     B:{
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#8fcbbc',
        // height:"100%"
     },
     A2:{
        fontSize:20,
        margin:10
     }
})

export default UserData;