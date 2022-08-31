import React,{useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet, TextInput} from "react-native";
// import {CheckBox} from '@react-native-community/checkbox';
// import { NavigationContainer } from "@react-navigation/native";
import {CheckBox} from 'react-native-elements';
import { ScrollView } from "react-native";

const DonateBlood=({navigation})=>{

    const [checked,setchecked]=useState(false);
    const [suffering,setsuffering]=useState(false);
    const [more,setmore]=useState(false);

    const [DName,setDName]=React.useState('');
 const [checkDName,setcheckDName]=React.useState(true); 
 const [errDName,seterrDName]=React.useState('');

 const [DMobileNo,setDMobileNo]=React.useState('');
 const [checkDMobileNo,setcheckDMobileNo]=React.useState(true); 
 const [errDMobileNo,seterrDMobileNo]=React.useState('');

 const [DEmail,setDEmail]=React.useState('');
 const [checkDEmail,setcheckDEmail]=React.useState(true); 
 const [errDEmail,seterrDEmail]=React.useState('');

 const [DBGroup,setDBGroup]=React.useState('');
 const [checkDBGroup,setcheckDBGroup]=React.useState(true); 
 const [errDBGroup,seterrDBGroup]=React.useState('');

 const validateDName = () =>{
    var DNam= /^([A-Za-z]{3,})$/;
    var DN=DName.trim();
    if(DN=='' || DN== undefined || DN == null){
        seterrDName('This field is required');
        setcheckDName(false);
        return false;
    }else if (!DNam.test(DN)){
        seterrDName('This field must contain some characters');
        setcheckDName(false);
        return false;
    }else{
        seterrDName('');
        setcheckDName(true);
        return true;
    }
}

const validateDMobile = () =>{
    var MNo= /^([0-9]{10})$/;
    var MN=DMobileNo.trim();
    if(MN=='' || MN== undefined || MN == null){
        seterrDMobileNo('please enter Mobile number');
        setcheckDMobileNo(false);
        return false;
    }else if (!MNo.test(MN)){
        seterrDMobileNo('Mobile number must contain 10 characters');
        setcheckDMobileNo(false);
        return false;
    }else{
        seterrDMobileNo('');
        setcheckDMobileNo(true);
        return true;
    }
}

const validateDEmail=()=>{
    var User=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    var use=DEmail.trim();
    if(use=='' || use== undefined || use == null){
        seterrDEmail('please enter Username');
        setcheckDEmail(false);
        return false;
    }else if (!User.test(use)){
        seterrDEmail('Please enter valid Username');
        setcheckDEmail(false);
        return false;
    }else{
        seterrDEmail('');
        setcheckDEmail(true);
        return true;
    }
}

const validateDBloodGroup = () =>{
    var BGr= /^([A-Z]{1,2})+([+-]{1})$/;
    var BG=DBGroup.trim();
    if(BG=='' || BG== undefined || BG == null){
        seterrDBGroup('please enter Blood Group');
        setcheckDBGroup(false);
        return false;
    }else if (!BGr.test(BG)){
        seterrDBGroup('Password must contain 2/3 characters(All leters must be capital and also include +/-');
        setcheckDBGroup(false);
        return false;
    }else{
        seterrDBGroup('');
        setcheckDBGroup(true);
        return true;
    }
}
    
    // const click=()=>{
    //     if(more===true)
    // }


    const submit=()=>{
        const formData={DName,DMobileNo,DEmail,DBGroup}
        fetch("http://192.168.43.153:3000/DBlood",{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            DName,
            DMobileNo,
            DEmail,
            DBGroup,
        })
       })
       .then(res=>res.text())
       .then(resText=>{
        console.log(resText)
        navigation.navigate('User')
    })
    }

    return(
    <ScrollView keyboardShouldPersistTaps='handled'>
    <View style={styles.A}>
        <Text style={styles.A1}>Blood Donation Form</Text>
        <View style={styles.B}>
        <View style={styles.A2}>
        <TextInput style={styles.A3} placeholder={"Donar Name"}  onChangeText={setDName} name={"DName"}  onEndEditing={validateDName}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkDName==true ? null:<Text style={{color:'red'}}>{errDName}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Donar Mobile No"}  onChangeText={setDMobileNo} name={'DMob'}  onEndEditing={validateDMobile}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkDMobileNo==true ? null:<Text style={{color:'red'}}>{errDMobileNo}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Donar Email"} onChangeText={setDEmail} name={"DEmail"}  onEndEditing={validateDEmail}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkDEmail==true ? null:<Text style={{color:'red'}}>{errDEmail}</Text>
        }
    </View>
        <TextInput style={styles.A3} placeholder={"Donar Blood group"} onChangeText={setDBGroup} name={"DBG"}  onEndEditing={validateDBloodGroup}/>
        <View style={{marginTop:5,width:300}}>
        {
            checkDBGroup==true ? null:<Text style={{color:'red'}}>{errDBGroup}</Text>
        }
    </View>
        </View>
        <View style={styles.A9}>
        <CheckBox
       title='if your weight is more than 50 kg'
       checked={more}
       onPress={()=>setmore(!more)}
       name={"more"}
        />
        </View>
        <View style={styles.A4}>
        <CheckBox
        title='if you are not suffering from fever'
        checked={suffering}
        onPress={()=>setsuffering(!suffering)}
        name={"suffering"}
        />
        </View>
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
        marginLeft:10
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

export default DonateBlood;