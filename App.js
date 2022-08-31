import React,{useEffect, useState} from "react";
import LogiN from "./log/loginpage";
import Signup from "./log/signup";
import Signuph from "./log/signuph";
import Login from "./log/loginpageh";
import Welcome from "./log/welcome";
import PageLog from "./log/loghp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./log/Ho";
import { BottomTabNavigationProp, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HTabs from "./log/Hho";
import IR from "./log/IimR";
import AR from "./log/Aiimsr";
import CR from "./log/Cityr";
import GR from "./log/Govtr";
import IA from "./log/Iima";
import AA from "./log/Aiimsa";
import CA from "./log/Citya";
import GA from './log/Govta'
import LoadingScreen from "./log/loading";
// import Register from "./reg/register";
import RegistrationSuccessu from "./log/RegisterSuccessu";
import RegistrationSuccessh from "./log/RegisterSuccessh";
import UserDetails from "./log/UserDetails";
import HookEffect from "./log/UserInformation";
import LoginUnsuccess from "./log/loginUnsuccess";
import HInformations from "./log/hInformations";
import Loginhos from "./log/loginpagehos";
import Forget from "./log/forget";
import Forget1 from "./log/forget1";

const Stack =  createNativeStackNavigator();

function App(){
  
  const [isloggedin,setLogged]=useState(null)

  const detectLogin=async()=>{
    const token=await AsyncStorage.getItem('token')
    if(token)
{
    //  setLogged(true)
}   
else{
     setLogged(false)
}
  }
  useEffect(()=>{
    detectLogin()
},[])

return(
<NavigationContainer>
  <Stack.Navigator>
       
      {/* //  isloggedin==null ? 
      //  (
      //   <>
      //   <Stack.Screen name="loading" component={LoadingScreen} />
      //   </>
      //   )
      //   :
        // isloggedin==true ? */}
        {/* // (
        // <>
        // <Stack.Screen name="HInformations" component={HInformations} />
        // </>
        // )
        // :
        // (
        // <>  */}
        <Stack.Screen name="Welcome" component={Welcome} />

       <Stack.Screen name="Page" component={PageLog} />

       <Stack.Screen name="People Login" component={LogiN} />

       <Stack.Screen name="Hospt Login" component={Loginhos} />

       <Stack.Screen name="Hospital Login" component={Login} />

       <Stack.Screen name="People Signup" component={Signup} />

       <Stack.Screen name="Hospital Signup" component={Signuph} />

       <Stack.Screen name="HInformations" component={HInformations} />

       <Stack.Screen name="UserDetails" component={UserDetails} />

       <Stack.Screen name="DashBoard" component={Tabs} />

       <Stack.Screen name="Hospital DashBoard" component={HTabs} />

       <Stack.Screen name="Blood Requirement IIM" component={IR} />

       <Stack.Screen name="Blood Requirement AIIMS" component={AR} />

       <Stack.Screen name="Blood Requirement City Hospital" component={CR} />

       <Stack.Screen name="Blood Requirement Govt. Hospital" component={GR} />

       <Stack.Screen name="Blood Available IIM" component={IA} />

       <Stack.Screen name="Blood Available AIIMS" component={AA} />

       <Stack.Screen name="Blood Available City Hospital" component={CA} />

       <Stack.Screen name="Blood Available Govt. Hospital" component={GA} />

       <Stack.Screen name="RegisterSuccessuser" component={RegistrationSuccessu} />

       <Stack.Screen name="RegisterSuccesshospital" component={RegistrationSuccessh} />

       <Stack.Screen name="UserInformations" component={HookEffect} />

       <Stack.Screen name="Loginunsuccess" component={LoginUnsuccess} />

       <Stack.Screen name="forget" component={Forget} />
       
       <Stack.Screen name="forgeth" component={Forget1} />
       {/* <Stack.Screen name="HInformations" component={HInformations} />   */}
      {/* //  </>
      //  )  */}

      </Stack.Navigator>
    </NavigationContainer>
    )
};




export default App;