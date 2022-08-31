import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons"

import DonateBlood from "./Menu/DonateBlood";
import NeedBlood from "./Menu/NeedBlood";
import Request from "./Menu/Requests";
import UserData from "./Menu/UserData";

const donate='DonateBlood';
const need='NeedBlood';
const req='Request';
const user='UserData';

const Tab = createNativeStackNavigator();

const Hom=({navigation})=>{
    return(
       <NavigationContainer>
           <Tab.Navigator
           initialRouteName={donate}
           screenOptions={({route}) =>({
               tabBarIcons: ({focused,color ,size})=>{
                   let iconName;
                   let rn=route.name;

                   if(rn===donate){
                       iconName=focused ? 'DonateBlood' : 'DonateBlood-outline'
                   }else if(rn=== need){
                    iconName=focused ? 'NeedBlood' : 'NeedBlood-outline'
                   }
                   else if(rn===req){
                    iconName=focused ? 'Request' : 'Request-outline'
                   }
                   else if(rn===user){
                    iconName=focused ? 'UserData' : 'UserData-outline'
                   }

                   return <Ionicons name={iconName} size={size} color={color}/>
                   },
           })}>
               <Tab.Screen name={donate} component={DonateBlood}/>
               <Tab.Screen name={need} component={NeedBlood}/>
               <Tab.Screen name={req} component={Request}/> 
               <Tab.Screen name={user} component={UserData}/>      
               </Tab.Navigator>
               </NavigationContainer>
    )
}

export default Hom;