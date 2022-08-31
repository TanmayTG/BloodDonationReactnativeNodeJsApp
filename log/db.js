import React from "react";
import { TextInput, TouchableOpacity, View,Text,StyleSheet } from "react-native";

const Db = () =>{
    return (
    <View style={styles.A}>
        <Text>Blood donation Form</Text>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Doner Name" 
         />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Mobile No" 
         />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email" 
         />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Blood group" 
         />
        <TouchableOpacity>
            <Text>Submit</Text>
        </TouchableOpacity>
    </View>
    );
}
const styles=StyleSheet.create({
    A:{
        marginTop:100
    }
})

export default Db;