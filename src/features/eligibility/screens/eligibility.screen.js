import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@react-native-vector-icons/ionicons';

export const EligibilityScreen=()=>{
    const navigation=useNavigation()
    return(
        <>
        <StatusBar/>
        <View style={{flex:1, backgroundColor:"black"}}>
            <TouchableOpacity style={{paddingLeft:10, paddingTop:40}} onPress={()=>navigation.toggleDrawer()}>
            <Ionicons name="menu-outline" color="white" size={35}/>
            </TouchableOpacity>
            <Text style={{color:"white", fontSize:30, paddingTop:250}}>
                Eligibility Screen
            </Text>
        </View>
    </>
    )
}