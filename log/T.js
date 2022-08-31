import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "react-native";

const Tab=createBottomTabNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    );
}

export default MyTabs;