import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
// import { TouchableOpacity } from "react-native-gesture-handler";

const UserDetails=({navigation})=>{
//     const [data,setData]=useState([])
//     const [loading,setLoading]=useState(true)
//     useEffect(()=>{
//            fetch("http://192.168.43.153:3000/datam")
//            .then(res=>res.json())
//            .then(results=>{
//             setData(results)
//             setLoading(false)
//            })
//     },[])
    return(
        <View>
        <View style={styles.A}>
            {/* {loading?
         <ActivityIndicator size="large" color="#0000ff" />
         :<Text>No data</Text>
            } */}
        </View>
        <View style={styles.B}>
            <TouchableOpacity style={styles.B1} onPress={()=>{navigation.navigate('DashBoard')}}>
              <Text style={styles.B2}>Go to Donate and Need Blood Section</Text>
            </TouchableOpacity>
        </View>
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

export default UserDetails;