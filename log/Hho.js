import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HospitalData from "./HMenu/HospitalData";
import AvailBlood from "./HMenu/Available";
// import NeedBlood from "./Menu/NeedBlood";
import Requirement from "./HMenu/Requirement";
// import AvailableBlood from "./Menu/AvailableBlood";

const Tab = createBottomTabNavigator();

const HTabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Hospital" component={HospitalData} options={{ headerShown: false }} />
            <Tab.Screen name="Available" component={AvailBlood} options={{ headerShown: false }} />
            {/* <Tab.Screen name="Need" component={NeedBlood} options={{ headerShown: false }} /> */}
            <Tab.Screen name="Requirement" component={Requirement} options={{ headerShown: false }} />
            {/* <Tab.Screen name="Available" component={AvailableBlood} options={{ headerShown: false}} /> */}
        </Tab.Navigator>
    )
}

export default HTabs;