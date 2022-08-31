import React from "react";
import { View,Image,StyleSheet,Text, TouchableOpacity } from "react-native";

const Welcome = ({navigation}) =>{
   return(
       <View style={styles.B}>
       <View style={styles.A}>
           <Image
           style={styles.A1}
           source={require("../assets/bloodDonation/r2.png")}
           />
           <View style={styles.A2}>
           <Text style={styles.A3}>Welcome to</Text>
           <Text style={[styles.A3,styles.A4]}> Donate Blood</Text>
           </View>
           <Text style={styles.A5}>Donate Blood is a platform where you can donate the blood and you can also find blood donar</Text>
       </View>
       <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('Page')
      }}>
           <Text style={styles.A6}>Get Start</Text>
       </TouchableOpacity>
       </View>
   );
}

const styles=StyleSheet.create({
  B:{
      alignItems:"center",
      paddingVertical:40,
      backgroundColor:'pink',
      height:"100%"
  },
  A:{
      alignItems:'center',
      borderBottomWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      width:300,
      borderRadius:10,
      backgroundColor:"skyblue"
  },
  A1:{
    height:400,
    width:300,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  A2:{
    flexDirection:'row'
  },
  A3:{
    fontSize:23,
    paddingVertical:10
  },
  A4:{
      color:"red"
  },
  A5:{
      color:'green',
      textAlign:'center',
      fontSize:18,
      paddingVertical:10
  },
  A6:{
      backgroundColor:'red',
      color:'white',
      padding:10,
      marginTop:20,
      borderRadius:10,
      fontSize:20
  }
})

export default Welcome;