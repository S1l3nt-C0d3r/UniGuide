import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
import { SafeArea } from "../../components/Utilities/safe-area.component";
//import { MapScreen } from "../../features/maps/screens/map.screen";
import Ionicons from "@expo/vector-icons/Ionicons"
import { HomeNavigator} from "./home.navigation";
import { EligibilityScreen } from "../../features/eligibility/screens/eligibility.screen";
//import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext } from "react";
import { NewsletterScreen } from "../../features/newsletter/screens/newsletter.screen";
import { Newsletter } from "../../features/newsletter/components/newsletter.style";
import { ProfileScreen } from "../../features/profile/screen/profile.screen";
//import { SettingsNavigator } from "../../features/settings/components/settings.navigator";

const SideTab = createDrawerNavigator();
const createScreenOptions={
  headerShown:false,
  drawerStyle:{
    backgroundColor:"#0F2027"
  },
  drawerActiveTintColor: 'white',
  drawerActiveBackgroundColor:"#2C5364",
  drawerLabelStyle:{
    color:"white",
    fontSize:20
  },
  drawerType:"slide"
}
export const AppNavigation=()=>{
    function Mytabs(){
        return(
        <SideTab.Navigator screenOptions={createScreenOptions}>
          <SideTab.Screen name="Colleges" component={HomeNavigator}/>
          <SideTab.Screen name="Newsletter" component={Newsletter}/>
          <SideTab.Screen name="Profile" component={ProfileScreen}/>
        </SideTab.Navigator> 
        )
      };
    return(
        <Mytabs/>
)}