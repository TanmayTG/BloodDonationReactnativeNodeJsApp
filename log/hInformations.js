import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,TouchableOpacity,FlatList } from "react-native";
// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { PromiseProvider } from "mongoose";
// import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage";
// import Login from "./loginpageh";



// const HInformations=async({navigation})=>{
    const HInformations=({navigation})=>{
    // const logout=()=>{
        // AsyncStorage.removeItem('token').then(()=>{
            // props.navigation.navigate('Hospital Dashboard')
        // })
    // }
    
    // const HInfo=
    // async()=>{
    // const token=await AsyncStorage.getItem('token')
    //    const[data,setData]=useState([])
    //    useEffect(async()=>{
        
    //     fetch("http://192.168.43.153:3000/loghos",{
    //     headers:new Headers({
    //         "Authorization":"Bearer "+token
    //     })
    //      }).then(res=>res.json())
    //      .then(data=>console.log(data))
            // setData(data)
    //      })
    //    },[])
    // }

    // const getData=async()=>{
    //     try{
    //         const jsonToken=await AsyncStorage.getItem('jwt')
    //         if(jsonToken!=null){
    //             console.log(jsonToken)
    //         }
    //         else{
    //             console.log(null)
    //         }
    //     }catch(e){

    //     }
    // }



    // const getUserData= async ()=>{
    //     try {
    //        const response = await fetch("http://192.168.43.153:3000/loghos")
    //        const myData=await response.json();
    //        console.log(myData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(()=>{
    //     getUserData()
    // },[])
    return(
        <View>
            <Text>Hii</Text>
             {/* <FlatList
        data={HInformations}
        renderItem={({data})=>{
            return(
                <View>
                    <Text>{data}</Text> */}
                    {/* <Text>{item.MobileNo}</Text> */}
                    {/* <Text>{item.Username}</Text> */}
                    {/* <Text>{item.BloodGroup}</Text> */}
                {/* </View>    
            )
        }}
        /> */}
            <View style={styles.B}>
            <TouchableOpacity style={styles.B1} onPress={()=>{navigation.navigate('Hospital DashBoard')}}>
              <Text style={styles.B2}>Go to Donate and Need Blood Section</Text>
            </TouchableOpacity>
        </View>
        {/* <View style={styles.B}>
            <TouchableOpacity style={styles.B1} onPress={()=>logout()}>
              <Text style={styles.B2}>Logout</Text>
            </TouchableOpacity>
        </View> */}
        </View>
    )
    }


const styles=StyleSheet.create({
    A:{
       marginBottom:30
    },
    B1:{
        alignItems:"center"
    },
    B2:{
        backgroundColor:'orange',
        padding:10,
        borderRadius:10,
        color:"white"
    }
})

export default HInformations