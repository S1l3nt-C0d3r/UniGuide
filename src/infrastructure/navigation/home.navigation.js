import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { Text, TouchableOpacity } from "react-native";
import { HomeScreen } from "../../features/home/screens/home.screen";
import { CollegeDetailScreen } from "../../features/home/screens/college-details.screen";
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HomeStack=createStackNavigator();
const collegeScreenOptions={
    headerShown:true,
    animationEnabled:true,
    headerStyle:{
    backgroundColor:'#0F2027',
    height:100,
    borderBottomColor:"white",
    borderBottomWidth:2,
    },
    headerTitleStyle:{
    fontSize:30,
    align:"center",
    color:"white",
    fontFamily:"EBGaramond_500Medium"
    },
    headerTitleAlign:"center",
    tabBarStyle:{
    backgroundColor:'transparent'
    },
    headerLeft:()=>{
        const navigation=useNavigation()
        return(
        <TouchableOpacity style={{paddingLeft:13}} onPress={navigation.goBack}>
            <Ionicons name="arrow-back-outline" color="white" size={30}/>
        </TouchableOpacity>
    )},
    gestureDirection:"horizontal"
}
export const HomeNavigator=()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown:false}}
            />
                <HomeStack.Screen
                    name="College Details"
                    component={CollegeDetailScreen}
                    options={collegeScreenOptions}
                        />
        </HomeStack.Navigator>
    )
}
