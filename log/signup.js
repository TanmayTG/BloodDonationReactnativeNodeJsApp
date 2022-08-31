import React from "react";
import {Text,View,StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
import Validate from "./validation";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { toastConfig } from "../toastconfig";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

// const Signup = (onSubmit,onChange,form,errors) => {
    const Signup = ({navigation}) => {

 const [Name,setName]=React.useState('');
 const [checkName,setcheckName]=React.useState(true); 
 const [errName,seterrName]=React.useState('');

 const [MobileNo,setMobileNo]=React.useState('');
 const [checkMobileNo,setcheckMobileNo]=React.useState(true); 
 const [errMobileNo,seterrMobileNo]=React.useState('');

 const [Username,setUsername]=React.useState('');
 const [checkUsername,setcheckUsername]=React.useState(true);
 const [errUsername,seterrUsername]=React.useState('');

 const [BloodGroup,setBloodGroup]=React.useState('');
 const [checkBloodGroup,setcheckBloodGroup]=React.useState(true); 
 const [errBloodGroup,seterrBloodGroup]=React.useState('');

 const [HNo,setHNo]=React.useState('');
 const [checkHNo,setcheckHNo]=React.useState(true); 
 const [errHNo,seterrHNo]=React.useState('');

 const [Street,setStreet]=React.useState('');
 const [checkStreet,setcheckStreet]=React.useState(true); 
 const [errStreet,seterrStreet]=React.useState('');

 const [Landmark,setLandmark]=React.useState('');
 const [checkLandmark,setcheckLandmark]=React.useState(true); 
 const [errLandmark,seterrLandmark]=React.useState('');

 const [City,setCity]=React.useState('');
 const [checkCity,setcheckCity]=React.useState(true); 
 const [errCity,seterrCity]=React.useState('');

 const [Pincode,setPincode]=React.useState('');
 const [checkPincode,setcheckPincode]=React.useState(true); 
 const [errPincode,seterrPincode]=React.useState('');

 const [State,setState]=React.useState('');
 const [checkState,setcheckState]=React.useState(true); 
 const [errState,seterrState]=React.useState('');

 const [Password,setPassword]=React.useState('');
 const [checkPassword,setcheckPassword]=React.useState(true); 
 const [errPassword,seterrPassword]=React.useState('');

 const [ConfirmPassword,setConfirmPassword]=React.useState('');
 const [checkConPassword,setcheckConPassword]=React.useState(true); 
 const [errConPassword,seterrConPassword]=React.useState('');

 const validateName = () =>{
    var Nam= /^([A-Za-z ]{3,})$/;
    var N=Name.trim();
    if(N=='' || N== undefined || N == null){
        seterrName('This field is required');
        setcheckName(false);
        return false;
    }else if (!Nam.test(N)){
        seterrName('This field must contain some characters');
        setcheckName(false);
        return false;
    }else{
        seterrName('');
        setcheckName(true);
        return true;
    }
}

const validateMobile = () =>{
    var MNo= /^([0-9]{10})$/;
    var MN=MobileNo.trim();
    if(MN=='' || MN== undefined || MN == null){
        seterrMobileNo('please enter Mobile number');
        setcheckMobileNo(false);
        return false;
    }else if (!MNo.test(MN)){
        seterrMobileNo('Mobile number must contain 10 characters');
        setcheckMobileNo(false);
        return false;
    }else{
        seterrMobileNo('');
        setcheckMobileNo(true);
        return true;
    }
}

const validateUsername=()=>{
    var User=/^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    var use=Username.trim();
    if(use=='' || use== undefined || use == null){
        seterrUsername('please enter Username');
        setcheckUsername(false);
        return false;
    }else if (!User.test(use)){
        seterrUsername('Please enter valid Username');
        setcheckUsername(false);
        return false;
    }else{
        seterrUsername('');
        setcheckUsername(true);
        return true;
    }
}

const validateBGroup = () =>{
    var BGr= /^([A-Z]{1,2})+([+-]{1})$/;
    var BG=BloodGroup.trim();
    if(BG=='' || BG== undefined || BG == null){
        seterrBloodGroup('please enter Blood Group');
        setcheckBloodGroup(false);
        return false;
    }else if (!BGr.test(BG)){
        seterrBloodGroup('Password must contain 2/3 characters(All leters must be capital and also include +/-');
        setcheckBloodGroup(false);
        return false;
    }else{
        seterrBloodGroup('');
        setcheckBloodGroup(true);
        return true;
    }
}

const ValidateHNo = () =>{
    var HNO= /^([0-9]{1,})$/;
    var HN=HNo.trim();
    if(HN=='' || HN== undefined || HN == null){
        seterrHNo('This field is required');
        setcheckHNo(false);
        return false;
    }else if (!HNO.test(HN)){
        seterrHNo('this field contains numbers only');
        setcheckHNo(false);
        return false;
    }else{
        seterrHNo('');
        setcheckHNo(true);
        return true;
    }
}

const validateStreet = () =>{
    var Str= /^([A-Za-z ]{3,})$/;
    var St=Street.trim();
    if(St=='' || St== undefined || St == null){
        seterrStreet('This field is required');
        setcheckStreet(false);
        return false;
    }else if (!Str.test(St)){
        seterrStreet('this field contains alphabets and numbers only');
        setcheckStreet(false);
        return false;
    }else{
        seterrStreet('');
        setcheckStreet(true);
        return true;
    }
}

const validateLandmark = () =>{
    var LMK= /^([A-Za-z ]{3,})$/;
    var LM=Street.trim();
    if(LM=='' || LM== undefined || LM == null){
        seterrLandmark('This field is required');
        setcheckLandmark(false);
        return false;
    }else if (!LMK.test(LM)){
        seterrLandmark('this field contains alphabets and numbers only');
        setcheckLandmark(false);
        return false;
    }else{
        seterrLandmark('');
        setcheckLandmark(true);
        return true;
    }
}

const validateCity = () =>{
    var Cit= /^([A-Za-z ]{3,})$/;
    var Ci=City.trim();
    if(Ci=='' || Ci== undefined || Ci == null){
        seterrCity('This field is required');
        setcheckCity(false);
        return false;
    }else if (!Cit.test(Ci)){
        seterrCity('this field contains alphabets only');
        setcheckCity(false);
        return false;
    }else{
        seterrCity('');
        setcheckCity(true);
        return true;
    }
}

const ValidatePincode = () =>{
    var Pinc= /^([0-9]{6})$/;
    var Pin=Pincode.trim();
    if(Pin=='' || Pin== undefined || Pin == null){
        seterrPincode('This field is required');
        setcheckPincode(false);
        return false;
    }else if (!Pinc.test(Pin)){
        seterrPincode('this field contains numbers only');
        setcheckPincode(false);
        return false;
    }else{
        seterrPincode('');
        setcheckPincode(true);
        return true;
    }
}

const validateState = () =>{
    var Sta= /^([A-Za-z ]{3,})$/;
    var St=State.trim();
    if(St=='' || St== undefined || St == null){
        seterrState('This field is required');
        setcheckState(false);
        return false;
    }else if (!Sta.test(St)){
        seterrState('this field contains alphabets only');
        setcheckState(false);
        return false;
    }else{
        seterrState('');
        setcheckState(true);
        return true;
    }
}

const validatePassword = () =>{
    // var Pass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    // var Pass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9@#$%^&*?.,]{8,}$/;
    var pas=Password.trim();
    if(pas=='' || pas== undefined || pas == null){
        seterrPassword('please enter password');
        setcheckPassword(false);
        return false;
    }
    // else if (!Pass.test(pas)){
    //     seterrPassword('Password must contain 8 characters,include(A-Z,a-z,0-9,special character');
    //     setcheckPassword(false);
    //     return false;
    // }
    else{
        seterrPassword('');
        setcheckPassword(true);
        return true;
    }
}

const validateConPassword = () =>{
    // var CPass= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    // var CPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9@#$%^&*?.,]{8,}$/;
    var Cpas=ConfirmPassword.trim();
    if(Cpas=='' || Cpas== undefined || Cpas == null){
        seterrConPassword('please enter password');
        setcheckConPassword(false);
        return false;
    }
    // else if (!CPass.test(Cpas)){
    //     seterrConPassword('Password must contain 8 characters,include(A-Z,a-z,0-9,special character');
    //     setcheckConPassword(false);
    //     return false;
    // }
    else{
        seterrConPassword('');
        setcheckConPassword(true);
        return true;
    }
}
// const clearTextInput=()=>{
//     setName('')
//     setMobileNo('')
//     setUsername('')
//     setBloodGroup('')
//     setHNo('')
//     setStreet('')
//     setLandmark('')
//     setCity('')
//     setPincode('')
//     setState('')
//     setPassword('')
//     setConfirmPassword('')
// }
const sub=()=>{
    if(Password === ConfirmPassword){
        console.log('Registration success')
        const formData ={ Name,MobileNo,Username,BloodGroup,HNo,Street,Landmark,City,Pincode,State,Password,ConfirmPassword }
        // console.log(formData)
        // if(validateName()&&validateMobile()&&validateUsername()&&validateBGroup()&&ValidateHNo()&&validateStreet()&&validateLandmark()&&validateCity()&&ValidatePincode()&&validateState()&&validatePassword()&&validateConPassword()){
        //     navigation.navigate('RegisterSuccessuser')
        //    }
        //    clearTextInput()
        // Toast.show({
        //   type:'done',
        //   position:'top',
        //   topOffset:0,
        //   text1:''
        // })
    }
      else{
        console.log('password and Confirm Password should be same')
        Toast.show({
            type:'warning',
            position:'top',
            topOffset:0,
            text1:'Password and Confirm Password should be same'
       })
    }
    fetch("http://192.168.43.153:3000/regisu",{
        method:"post",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Name,
            MobileNo,
            Username,
            BloodGroup,
            HNo,
            Street,
            Landmark,
            City,
            Pincode,
            State,
            Password,
            ConfirmPassword
        })
       })
       .then(res=>res.text())
       .then(resText=>{
        if(resText==="Registered_successfully"){
            navigation.navigate('RegisterSuccessuser')
        }
        else{
            Toast.show({
                type:'warning',
                position:'top',
                topOffset:0,
                text1:'Username or mobile number already registerd'
           })
        }
        console.log(resText)
        // Alert.alert(`${data.Name} is saved successfuly`)
       })
    }

  return (
      <SafeAreaView style={styles.M}>
         <Toast config={toastConfig} />
         <ScrollView keyboardShouldPersistTaps='handled'>
      <Text style={styles.R}>-------  Register  -------</Text>
      <View style={styles.J}>
      <Text style={styles.J1}>Resitration form for User</Text>
      </View>
    {/* <View style={styles.C}>
    <View style={styles.A}>   */}
    {/* <Text style={styles.A1}>Enter your name:</Text> */}
    {/* <TextInput style={styles.A2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="First Name"
    />
    </View>
    <View style={styles.B}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    {/* <TextInput style={styles.B2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Last Name"
    />
    </View>
    </View> */}

    <View style={styles.D}> 
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.D2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Name"
        name={'Name'}
        // onChange={(value)=>{
        //     onChange({name:'hospitalName',value})
        // }}

        // error={errors.hospitalName}
        onChangeText={setName}  onEndEditing={validateName}
    />
    <View style={{marginTop:5,width:310}}>
        {
            checkName==true ? null:<Text style={{color:'red'}}>{errName}</Text>
        }
    </View>
    <TextInput style={styles.D2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Mobile Number"
        name={'Mobile'}
        // error={errors.MobileNumber}
        onChangeText={setMobileNo}  onEndEditing={validateMobile}
    />
    <View style={{marginTop:5,width:310}}>
        {
            checkMobileNo==true ? null:<Text style={{color:'red'}}>{errMobileNo}</Text>
        }
    </View>
    </View>
    <View style={styles.E}>  
    {/* <Text style={styles.B1}>Enter your name:</Text> */}
    <TextInput style={styles.E2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        name={'Username'}
        // error={errors.Email}
        onChangeText={setUsername}  onEndEditing={validateUsername}
    />
    <View style={{marginTop:5,width:310}}>
        {
            checkUsername==true ? null:<Text style={{color:'red'}}>{errUsername}</Text>
        }
    </View>
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
        placeholder="Blood Group"
        name={'BloodGroup'}
        // error={errors.BloodGroup}
        onChangeText={setBloodGroup}  onEndEditing={validateBGroup}
    />
     <View style={{marginTop:5,width:310}}>
        {
            checkBloodGroup==true ? null:<Text style={{color:'red'}}>{errBloodGroup}</Text>
        }
    </View>
    <View style={styles.F}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="House no"
        name={'HNo'}
        onChangeText={setHNo}  onEndEditing={ValidateHNo}
    /> 
    <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Street/village"
        name={'Street'}
        // error={errors.Street}
        onChangeText={setStreet}  onEndEditing={validateStreet}
    />
    {/* </View>
    <View style={styles.G}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Landmark"
    /> */}
    </View>
    <View style={styles.Z}>
    <View style={styles.Z1}>
        {
            checkHNo==true ? null:<Text style={{color:'red'}}>{errHNo}</Text>
        }
    </View>
     <View style={styles.Z2}>
        {
            checkStreet==true ? null:<Text style={{color:'red'}}>{errStreet}</Text>
        }
    </View>
    </View>
    <View style={styles.x}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Landmark"
        name={'Landmark'}
        // error={errors.Pincode}
        onChangeText={setLandmark}  onEndEditing={validateLandmark}
    />
    <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="City"
        name={'City'}
        // error={errors.State}
        onChangeText={setCity}  onEndEditing={validateCity}
    />
     </View>
     <View style={styles.Z}>
    <View style={styles.Z1}>
        {
            checkLandmark==true ? null:<Text style={{color:'red'}}>{errLandmark}</Text>
        }
    </View>
     <View style={styles.Z2}>
        {
            checkCity==true ? null:<Text style={{color:'red'}}>{errCity}</Text>
        }
    </View>
    </View>
    <View style={styles.H}>
    <TextInput style={styles.F1}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Pincode"
        name={'Pincode'}
        // error={errors.Pincode}
        onChangeText={setPincode}  onEndEditing={ValidatePincode}
    />
    <TextInput style={styles.F2}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="State"
        name={'State'}
        // error={errors.State}
        onChangeText={setState}  onEndEditing={validateState}
    />
     </View>
       <View style={styles.Z}>
    <View style={styles.Z1}>
        {
            checkPincode==true ? null:<Text style={{color:'red'}}>{errPincode}</Text>
        }
    </View>
     <View style={styles.Z2}>
        {
            checkState==true ? null:<Text style={{color:'red'}}>{errState}</Text>
        }
    </View>
    </View>
    <TextInput style={styles.G1}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Password"
        name={'Password'}
        // error={errors.Password}
        onChangeText={setPassword}  onEndEditing={validatePassword}
    />
    <View style={{marginTop:5,width:310}}>
        {
            checkPassword==true ? null:<Text style={{color:'red'}}>{errPassword}</Text>
        }
    </View>
    <TextInput style={styles.G1}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Confirm Password"
        name={'ConfirmPassword'}
        // error={errors.ConfirmPassword}
        onChangeText={setConfirmPassword}  onEndEditing={validateConPassword}
    />
     <View style={{marginTop:5,width:310}}>
        {
            checkConPassword==true ? null:<Text style={{color:'red'}}>{errConPassword}</Text>
        }
    </View>
    </View>
    </View>
    <TouchableOpacity style={styles.I} onPress={sub}>
        <Text>Submit</Text>
    </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    M:{
      paddingLeft: 5,
      backgroundColor: "silver",
    //   width:"100%",
    alignItems:"center",
    paddingVertical:-20,
    height:"100%",
    },
    R:{
      fontSize:35,
      textAlign:'center'
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
    x:{
        flexDirection:"row"
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
        fontSize:28,
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
    },
    Z:{
        flexDirection:'row'
     },
     Z1:{
         width:150,
         marginTop:5,
         paddingLeft:0
     },
     Z2:{
         width:150,
         marginTop:5,
         paddingLeft:6
     }
    });

export default Signup;