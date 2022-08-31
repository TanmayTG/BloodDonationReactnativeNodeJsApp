import React from "react";
import { View,Text,StyleSheet,TouchableOpacity,Image } from "react-native";

const RegistrationSuccessu=({navigation})=>{
   return(
    <View style={styles.A}>
        <Image
        style={styles.I}
        source={require('../assets/bloodDonation/b4.png')} 
        />
        <Text style={styles.A1}>Congradulation, you have registered successfully</Text>
        <Text style={styles.A2}>Please login</Text>
        <TouchableOpacity style={styles.A3} onPress={()=>{navigation.navigate('People Login')}}>
            <Text style={styles.A4}>Go to login page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.A5} onPress={()=>{navigation.navigate('People Signup')}}>
            <Text style={styles.A6}>Register for another user</Text>
        </TouchableOpacity>
    </View>
   )
}

const styles=StyleSheet.create({
       A:{
         paddingVertical:0,
         backgroundColor:"pink",
         height:'100%'      
       },
       A1:{
        fontSize:30,
        textAlign:'center',
        marginBottom:20
       },
       A2:{
        fontSize:25,
        textAlign:'center',
        marginBottom:20
       },
       A3:{
        alignItems:"center",
        marginBottom:20
       },
       A4:{
        fontSize:20,
        color:'red'
       },
       A5:{
        alignItems:'center',
       },
       A6:{
        fontSize:20,
        color:'blue'
       },
       I:{
        alignSelf:"center",
        width:200,
        height:200,
        // borderRadius:10
        marginBottom:20,
        marginTop:50
       }
})

export default RegistrationSuccessu;