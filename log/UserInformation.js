import React, { useEffect, useState } from "react";
import { View,Text,StyleSheet,ActivityIndicator } from "react-native";
// import { FlatList } from "react-native-gesture-handler";

const HookEffect = ({navigation}) =>{
    // const [data,setData]=useState('')
    // useEffect(()=>{
    //     fetch("http://192.168.43.153:3000/datam")
    //     .then(res=>res.json())
    //     .then(data=>{console.log(data)
        
    //     })
    // })


    
    // const [data,setData]=useState([])
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //   fetch("http://192.168.43.153:3000/datam")
    //   .then(res=>res.json())
    //   .then(results=>{
    //     setData(results)
    //     setLoading(false)
    //   })
    // },[])
//    const [myUserData,setMyUserData]=useState();
//    const [isLoading,setLoading]=useState(true);

//     const getUserData=async()=>{
//         try{
//          const response = await fetch(
//             "http://192.168.43.153:3000/datam"
//             );
//             const myData=await response.json();
//             setMyUserData(myData);
//             setLoading(false);
//             console.log(myData);
//         }catch(error){
//             console.log(error);
//         }
//     }

//     useEffect(()=>{
//         getUserData();
//     },[]);

return(
    <View>
        {/* {
        loading?
    <ActivityIndicator size="large" color="#0000ff" /> 
    :
    <FileList
    data={data}
    renderItem={({item})=>{
        return renderList(item)
    }}   
    keyExtractor={item=>item._id}
    />
    } */}
        <Text>Hii</Text>
        {/* <FlatList
        data={myUserData}
        renderItem={({item})=>{
            return(
                <View>
                    <Text>{item.Name}</Text>
                    <Text>{item.MobileNo}</Text>
                    <Text>{item.Username}</Text>
                    <Text>{item.BloodGroup}</Text>
                </View>    
            )
        }}
        /> */}
    </View>
);
};

const styles=StyleSheet.create({});

export default HookEffect;