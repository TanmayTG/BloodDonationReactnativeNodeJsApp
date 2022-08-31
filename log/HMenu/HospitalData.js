import React,{useEffect,useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { NavigationContainer } from "@react-navigation/native";

const HospitalData=({navigation})=>{
   
    // const[token,setToken]=useState('')
    
    const[Email,setEmail]=useState('')
    const[Hname,setHname]=useState('')
    const[Mob,setMob]=useState('')
    
    // const fetchToken=async()=>{
    //     const token2=await AsyncStorage.getItem('token')
    //     console.log('token is',token2)
    //     setToken(token2)
    // }
    useEffect(()=>{
        // const token2=await AsyncStorage.getItem('token')
    // async function a(){
    // fetchToken()
    // if(token){
    // console.log(token)
    // }
    // fetchToken()
    const fetchData=async()=>{
        const token3=await AsyncStorage.getItem('token')
     fetch("http://192.168.43.153:3000/loghos",{
     headers:new Headers({
         "Authorization":"Bearer "+ token3
     })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        setHname(data.Hname)
        setEmail(data.Email)
        setMob(data.Mob)
    })
}
fetchData();
    },[])



    return(
    <View style={styles.A}>
        <View style={styles.B}>
        <Text style={styles.A1}>Hospital Data</Text>
        </View>
        <Text style={styles.A2}>Hospital Name:{Hname}</Text>
        <Text style={styles.A2}>Hospital Email:{Email}</Text>
        <Text style={styles.A2}>Hospital MobileNo:{Mob}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('User')}}>
            {/* <Text>click here</Text> */}
        </TouchableOpacity>
    </View>
    );
    }    

const styles=StyleSheet.create({
     B:{
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#8fcbbc',
        // height:"100%"
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
     A:{
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#8fcbbc',
        height:"100%"
     },
     A2:{
        fontSize:20,
        margin:10
     }
})

export default HospitalData;