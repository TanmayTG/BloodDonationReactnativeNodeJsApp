import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import UserData from "./Menu/UserData";
import DonateBlood from "./Menu/DonateBlood";
import NeedBlood from "./Menu/NeedBlood";
import Request from "./Menu/Requests";
import AvailableBlood from "./Menu/AvailableBlood";
// import { ScrollView } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="User" component={UserData} options={{ headerShown: false }} />
            <Tab.Screen name="Donate" component={DonateBlood} options={{ headerShown: false }} />
            <Tab.Screen name="Need" component={NeedBlood} options={{ headerShown: false }} />
            <Tab.Screen name="Req" component={Request} options={{ headerShown: false }} />
            <Tab.Screen name="Available" component={AvailableBlood} options={{ headerShown: false}} />
        </Tab.Navigator>
    )
}

export default Tabs;