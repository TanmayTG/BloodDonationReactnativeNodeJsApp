import React from "react";
import { View,Text, TouchableOpacity,StyleSheet } from "react-native";
import H from "./h";
// import D from "./d";
import Db from "./db";
const Home = () =>{
    return(
        <View style={StyleSheet.A}>
              {/* <D /> */}
              <Db />
              <H />
        </View>
    );
}

const styles=StyleSheet.create({
    A:{
        height:"100%",
        paddingVertical:100
    }
})
//     <View style={styles.M}>
//       <View style={[styles.M1,styles.M2]}>
//       <TouchableOpacity style={[styles.A,styles.A1]}>
//           <Text style={styles.N}>Dashboard</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.A,styles.A2]}>
//           <Text style={styles.N}>DB</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.A,styles.A3]}>
//           <Text style={styles.N}>NB</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.A,styles.A4]}>
//           <Text style={styles.N}>Requests</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//     );
// }

// const styles=StyleSheet.create({
//   M:{
//     height:550,
//   },
//   A:{
//       position:'absolute',
//   },
//   A1:{
//       bottom:0,
//       right:220,
//       padding:10,
//   },
//   A2:{
//       bottom:0,
//       right:170,
//       padding:10,
//   },
//   A3:{
//       bottom:0,
//       right:110,
//       padding:10,
//   },
//   A4:{
//       bottom:0,
//       right:20,
//       padding:10,
//   },
//   M1:{
//       position:'absolute',
//       height:40,
//       width:319,
//       backgroundColor:"blue",
//   },
//   M2:{
//       bottom:0,
//   },
//   N:{
//       color:"white",
//   }
// })

export default Home;