import React from "react";
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";

const H = () =>{
    return(
    <View style={styles.M}>
      <View style={[styles.M1,styles.M2]}>
      <TouchableOpacity style={[styles.A,styles.A1]}>
          <Text style={styles.N}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.A,styles.A2]}>
          <Text style={styles.N}>DB</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.A,styles.A3]}>
          <Text style={styles.N}>NB</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.A,styles.A4]}>
          <Text style={styles.N}>Requests</Text>
      </TouchableOpacity>
      </View>
    </View>
    );
}

const styles=StyleSheet.create({
  M:{
    height:480,
  },
  A:{
      position:'absolute',
  },
  A1:{
      bottom:0,
      right:230,
      padding:20,
  },
  A2:{
      bottom:0,
      right:175,
      padding:20,
  },
  A3:{
      bottom:0,
      right:115,
      padding:20,
  },
  A4:{
      bottom:0,
      right:20,
      padding:20,
  },
  M1:{
      position:'absolute',
      height:60,
      width:360,
      backgroundColor:"blue",
  },
  M2:{
      bottom:0,
  },
  N:{
      color:"white",
  }
})

export default H;