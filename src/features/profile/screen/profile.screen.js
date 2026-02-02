import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { SafeArea } from "../../../components/Utilities/safe-area.component";
import { ProfileHeader } from "../component/profile-header.component";
import { ProfileDetails } from "../component/profile-details.component";
import { LogoutButton } from "../component/logout-button.component";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const ProfileScreen = () => {
    const navigation=useNavigation() 
  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{flex:1, paddingTop:30}}>
    <StatusBar backgroundColor={"transparent"}></StatusBar>
       <View style={{ flexDirection: "row", marginBottom: 16, alignSelf:"center"}}>
          <TouchableOpacity
            style={{ paddingLeft: 10, paddingTop: 14, right:110 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="menu-outline" color="white" size={35} />
          </TouchableOpacity>
        <Text style={{fontSize:35, color:"white", right:20, paddingTop:9, fontFamily:"EBGaramond_500Medium"}}>Profile</Text>
        </View>
        <View style={{borderColor:"white", borderBottomWidth:2}}></View>
        <ProfileHeader />
        <LogoutButton />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  scroll: {
    alignItems: "center",
    paddingVertical: 24,
  },
});
