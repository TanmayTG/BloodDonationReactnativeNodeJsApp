import React,{useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet, TextInput,Image} from "react-native";
// import {CheckBox} from '@react-native-community/checkbox';
// import { NavigationContainer } from "@react-navigation/native";
import {CheckBox} from 'react-native-elements';
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NeedBlood=({navigation})=>{

    const [checked,setchecked]=useState(false);
    const [suffering,setsuffering]=useState(false);
    const [more,setmore]=useState(false);

    const [PName,setPName]=React.useState('');
    const [checkPName,setcheckPName]=React.useState(true); 
    const [errPName,seterrPName]=React.useState('');
   
    const [PMobileNo,setPMobileNo]=React.useState('');
    const [checkPMobileNo,setcheckPMobileNo]=React.useState(true); 
    const [errPMobileNo,seterrPMobileNo]=React.useState('');
   
    const [PEmail,setPEmail]=React.useState('');
    const [checkPEmail,setcheckPEmail]=React.useState(true); 
    const [errPEmail,seterrPEmail]=React.useState('');
   
    const [PBGroup,setPBGroup]=React.useState('');
    const [checkPBGroup,setcheckPBGroup]=React.useState(true); 
    const [errPBGroup,seterrPBGroup]=React.useState('');
   
    const validatePName = () =>{
       var PNam= /^([A-Za-z]{3,})$/;
       var PN=PName.trim();
       if(PN=='' || PN== undefined || PN == null){
           seterrPName('This field is required');
           setcheckPName(false);
           return false;
       }else if (!PNam.test(PN)){
           seterrPName('This field must contain some characters');
           setcheckPName(false);
           return false;
       }else{
           seterrPName('');
           setcheckPName(true);
           return true;
       }
   }
   
   const validatePMobile = () =>{
       var MNo= /^([0-9]{10})$/;
       var MN=PMobileNo.trim();
       if(MN=='' || MN== undefined || MN == null){
           seterrPMobileNo('please enter Mobile number');
           setcheckPMobileNo(false);
           return false;
       }else if (!MNo.test(MN)){
           seterrPMobileNo('Mobile number must contain 10 characters');
           setcheckPMobileNo(false);
           return false;
       }else{
           seterrPMobileNo('');
           setcheckPMobileNo(true);
           return true;
       }
   }
   
   const validatePEmail=()=>{
       var User=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
       var use=PEmail.trim();
       if(use=='' || use== undefined || use == null){
           seterrPEmail('please enter Username');
           setcheckPEmail(false);
           return false;
       }else if (!User.test(use)){
           seterrPEmail('Please enter valid Username');
           setcheckPEmail(false);
           return false;
       }else{
           seterrPEmail('');
           setcheckPEmail(true);
           return true;
       }
   }
   
   const validatePBloodGroup = () =>{
       var BGr= /^([A-Z]{1,2})+([+-]{1})$/;
       var BG=PBGroup.trim();
       if(BG=='' || BG== undefined || BG == null){
           seterrPBGroup('please enter Blood Group');
           setcheckPBGroup(false);
           return false;
       }else if (!BGr.test(BG)){
           seterrPBGroup('Password must contain 2/3 characters(All leters must be capital and also include +/-');
           setcheckPBGroup(false);
           return false;
       }else{
           seterrPBGroup('');
           setcheckPBGroup(true);
           return true;
       }
   }
    
    // const click=()=>{
    //     if(more===true)
    // }

    const submit=()=>{
        const formData={PName,PMobileNo,PEmail,PBGroup}
        fetch("http://192.168.43.153:3000/NBlood",{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            PName,
            PMobileNo,
            PEmail,
            PBGroup,
        })
       })
       .then(res=>res.text())
       .then(resText=>{
        console.log(resText)
        navigation.navigate('User')
    })
    }

    return(
        // <SafeAreaView>
     
    <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={styles.A}>
        <Text style={styles.A1}>Blood Requirement Form</Text>
        <View style={styles.B}>
        <Image
        style={styles.I}
        source={require('../../assets/bloodDonation/b4.png')} 
        />
        <View style={styles.A2}>
        <TextInput style={styles.A3} placeholder={"Patient Name"} name={"PName"} onChangeText={setPName}  onEndEditing={validatePName}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkPName==true ? null:<Text style={{color:'red'}}>{errPName}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Patient Mobile No"} name={"PMob"} onChangeText={setPMobileNo}  onEndEditing={validatePMobile}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkPMobileNo==true ? null:<Text style={{color:'red'}}>{errPMobileNo}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Patient Email"} name={"PEmail"} onChangeText={setPEmail}  onEndEditing={validatePEmail}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkPEmail==true ? null:<Text style={{color:'red'}}>{errPEmail}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Patient Blood group"} name={"PBG"} onChangeText={setPBGroup}  onEndEditing={validatePBloodGroup}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkPBGroup==true ? null:<Text style={{color:'red'}}>{errPBGroup}</Text>
        }
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
        <TouchableOpacity  onPress={submit}>
            <Text style={styles.A8}>Submit</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity>
            {/* <Text>click here</Text> */}
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    );
}

const styles=StyleSheet.create({
     A:{
        // justifyContent:'center',
        alignItems:'center',
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
         marginTop:20,
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
     I:{
        height:200,
        width:200,
        alignSelf:"center"
     }
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

export default NeedBlood;