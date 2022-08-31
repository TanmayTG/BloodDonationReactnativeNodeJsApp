import React,{useEffect} from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";    


const LoadingScreen=({navigation})=>{


    const nav=async()=>{
        navigation.navigate('HInformations')
    }
    
    const n=async()=>{
        navigation.navigate('Login')
    }

    const detectLogin=async()=>{
        const token=await AsyncStorage.getItem('token')
        if(token)
        
            //  props.navigation.navigate('hInfo')
            // navigation.navigate('HInformations')
            nav()
           
        else
            // props.navigation.navigate('Login')
            navigation.navigate('Hospital Login')
            // n()

    }

    useEffect(()=>{
        detectLogin()
    },[])
    return(
        <>
        <ActivityIndicator size='large' color='blue' />
        </>
    )
}

export default LoadingScreen