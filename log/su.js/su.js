import React from "react";
import {Text,View,StyleSheet, TextInput, TouchableOpacity} from "react-native";



const Signup = () =>{

  return (
      <View style={styles.M}>
      <Text style={styles.R}>-------  Register  -------</Text>
      <View style={styles.J}>
      <Text style={styles.J1}>Resitration form for user</Text>
      </View>
      <View style={styles.C}>
    <View style={styles.A}>  
    {/* <Text style={styles.A1}>Enter your name:</Text> */}
    <TextInput style={styles.A2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'FirstName'}
        placeholder="First Name"
    />
    </View>
    <View style={styles.B}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.B2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'LastName'}
        placeholder="Last Name"
    />
    </View>
    </View>
    <View style={styles.D}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.D2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'MobileNumber'}
        placeholder="Mobile Number"
    />
    </View>
    <View style={styles.E}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.E2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'Email'}
        placeholder="Email"
    />
    </View>
    <View style={styles.E}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    {/* <TextInput style={styles.E2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Address"
    /> */}
     <View style={styles.E}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.E2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'BloodGroup'}
        placeholder="Blood Group"
    />
    <View style={styles.F}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        name={'HouseNumber'}
        placeholder="House no"
    />
    <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'Street'}
        placeholder="Street/village"
    />
    </View>
    <View style={styles.G}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        name={'Landmark'}
        placeholder="Landmark"
    />
     <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'City'}
        placeholder="City"
    />
    </View> 
    <View style={styles.H}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        name={'Pincode'}
        placeholder="Pincode"
    />
    <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        name={'State'}
        placeholder="State"
    />
    </View>
     <TextInput style={styles.G1}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        name={'Password'}
        placeholder="Password"
    />
     <TextInput style={styles.G1}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        name={'ConfirmPassword'}
        placeholder="Confirm Password"
    />
    </View>
    </View>
    <TouchableOpacity style={styles.I}>
        <Text>Submit</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    M:{
      paddingLeft: 5,
      backgroundColor: "silver",
    //   width:"100%",
    alignItems:"center",
      height:"100%",
      paddingVertical:40
    },
    R:{
      fontSize:30,
    },
    A:{
    //   flexDirection:'row',
    marginRight:10,
    },
    C:{
      flexDirection:'row',
    },
    A1:{
        fontSize:20,
    },
    A2:{
        width:150,
        height:40,
        // borderRadius: 10,
        borderWidth:1,
        // borderColor:"white",
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
    },
    B2:{
        width:150,
        height:40,
        // borderRadius: 10,
        borderWidth:1,
        // borderColor:"white",
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
    },
    B1:{
        fontSize:20,
    },
    // B2:{
    //     width:300,
    //     height:40,
    //     borderRadius: 10,
    //     paddingLeft:5,
    //     backgroundColor:"silver",
    //     justifyContent:"center",
    //     alignItems: 'center',
    //     marginTop:10,
    // }
    D2:{
        width:310,
        height:40,
        // borderRadius: 10,
        borderWidth:1,
        // borderColor:"white",
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
    },
    E2:{
        width:310,
        height:40,
        // borderRadius: 10,
        borderWidth:1,
        // borderColor:"white",
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems: 'center',
        marginTop:10,
    },
    F:{
        flexDirection:"row",
    },
    G:{
        flexDirection:"row",
    },
    H:{
        flexDirection:"row",
    },
    F1:{
        width:150,
        height:40,
        borderWidth:1,
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        marginTop:10,
        marginRight:10,          
    },
    F2:{
        width:150,
        height:40,
        borderWidth:1,
        fontSize:17,
        paddingLeft:10,
        backgroundColor:"white",
        marginTop:10,          
    },
    I:{
        width:310,
        height:40,
        backgroundColor:"orange",
        marginTop:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    J1:{
        width:310,
        fontSize:25,
        textAlign:'center',
    },
    G1:{
        width:310,
        backgroundColor:"white",
        borderWidth:1,
        height:40,
        paddingLeft:10,
        fontSize:17,
        marginTop:10
    }
    });

export default Signup;