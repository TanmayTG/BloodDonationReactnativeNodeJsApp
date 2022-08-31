import React,{useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet, TextInput} from "react-native";
// import {CheckBox} from '@react-native-community/checkbox';
// import { NavigationContainer } from "@react-navigation/native";
import { ScrollView } from "react-native";
import {CheckBox} from 'react-native-elements';

const Requirement=({navigation})=>{

    // const [checked,setchecked]=useState(false);
    // const [suffering,setsuffering]=useState(false);
    // const [more,setmore]=useState(false);
    
    // const click=()=>{
    //     if(more===true)
    // }

    const[O1,setO1]=useState('')
    const[O2,setO2]=useState('')
    const[A1,setA1]=useState('')
    const[A2,setA2]=useState('')
    const[B1,setB1]=useState('')
    const[B2,setB2]=useState('')
    const[AB1,setAB1]=useState('')
    const[AB2,setAB2]=useState('')

    const sub=()=>{
        const formData={O1,O2,A1,A2,B1,B2,AB1,AB2}
        fetch('http://192.168.43.153:3000/require',{
            method:"post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                O1:O1,
                O2:O2,
                A1:A1,
                A2:A2,
                B1:B1,
                B2:B2,
                AB1:AB1,
                AB2:AB2
            })
        })
        .then(res=>res.text())
       .then(resText=>{
        console.log(resText)
        navigation.navigate('Hospital')
    })
    }

    return(
    <ScrollView keyboardShouldPersistTaps='handled'>
    <View style={styles.A}>
        <Text style={styles.A1}>Required Blood Groups</Text>
        <View style={styles.B}>
        <View style={styles.A2}>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>O+:  </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (O+)"} value={O1} onChangeText={setO1}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>O-:   </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (O-)"} value={O2} onChangeText={setO2}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>A+:   </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (A+)"} value={A1} onChangeText={setA1}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>A-:    </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (A-)"} value={A2} onChangeText={setA2}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>B+:   </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (B+)"} value={B1} onChangeText={setB1}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>B-:    </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (B-)"} value={B2} onChangeText={setB2}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>AB+: </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (AB+)"} value={AB1} onChangeText={setAB1}/>
        </View>
        <View style={styles.B1}>
        {/* <Text style={styles.B2}>AB-:  </Text> */}
        <TextInput style={styles.A3} placeholder={"number of units (AB-)"} value={AB2} onChangeText={setAB2}/>
        </View>
        </View>
        {/* <View style={styles.A9}>
        <CheckBox
       title='if your weight is more than 50 kg'
       checked={more}
       onPress={()=>setmore(!more)}
        />
        </View>
        <View style={styles.A4}>
        <CheckBox
        title='if you are not suffering from fever'
        checked={suffering}
        onPress={()=>setsuffering(!suffering)}
        />
        </View> */}
        <View style={styles.A7}>
        <TouchableOpacity onPress={sub}>
            <Text style={styles.A8}>Submit</Text>
        </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={()=>{navigation.navigate('Donate')}}> */}
            {/* <Text>click here</Text> */}
        {/* </TouchableOpacity> */}
    </View>
    </View>
    </ScrollView>
    );
}

const styles=StyleSheet.create({
     A:{
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor:'#8fcbbc',
        height:'100%'
     },
     A1:{
         padding:5,
         fontSize:30,
         backgroundColor:'pink',
         width:"100%",
         textAlign:'center'
     },
     A2:{
       alignItems:'center'
     },
     A3:{
         width:300,
         borderRadius:10,
         backgroundColor:"white",
         marginTop:10,
         height:40,
         paddingLeft:10,
         fontSize:20
     },
     A4:{
        width:320,
        marginTop:15,
     },
     A5:{
         padding:10,
         fontSize:17
     },
     A6:{
         marginTop:15
     },
     A7:{
        //  justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        width:300,
        borderRadius:10,
        marginTop:15,
        marginLeft:10,
     },
     A8:{
        padding:10,
        fontSize:20,
        color:'white'
     },
     A9:{
        width:320,
        marginTop:20,
     },
     B:{
         margin:20
     },
    //  B1:{
    //      marginTop:10,
    //      flexDirection:'row'
    //  },
     B2:{
         fontSize:30
     }
    //  B1:{
    //      display:'flex',
    //      flexDirection:"row"
    //  }
    //  A8:{
    //     //  textAlign:'center',
    //      width:300,
    //      height:40,
    //      borderRadius:10,
    //      backgroundColor:'red',
    //      color:'white',
    //      textAlign:'center'        
    //  }
})

export default Requirement;