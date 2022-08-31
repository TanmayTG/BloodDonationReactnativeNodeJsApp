import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity,Image, View , StyleSheet ,Text} from "react-native";

const PageLog = ({navigation}) =>{
    return(
        <View style={styles.A}>
            <Image 
            style={styles.A1}
            source={require("../assets/bloodDonation/blood1.png")}
            />
            <TouchableOpacity
             onPress={()=>{
                navigation.navigate('People Login')
            }}>
                <View style={styles.D}>
                <Text style={styles.B}>People</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{
                navigation.navigate('Hospital Login')
            }}>
                <View style={styles.D}>
                <Text style={styles.B}>Hospital</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
      A:{
            // justifyContent:'center',
            alignItems:'center',
            height:"100%",
            backgroundColor:"skyblue"
            // backgroundColor:'pink'
      },
      A1:{
        margin:0,
        height:400,
        width:300,
        borderRadius:10
        // borderTopRightRadius:10,
        // borderTopLeftRadius:10
      },
     B:{
          fontSize:30,
          backgroundColor:'red',
          padding:10,
          marginBottom:30,
          height:70,
          width:150,
          textAlign:'center',
          color:'white',
          borderRadius:10
      },
    D:{
         justifyContent:'center',
         alignItems:'center'
    }
}) 

export default PageLog;