import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { ImageBackground, Text, View } from "react-native";
import { AccountCover,AccountBackground, AccountContainer, AuthButton, Title} from "../components/account.styles";
import {Spacer} from "../../../components/Spacer/spacer.component"
import { LinearGradient } from "expo-linear-gradient";

export const AccountScreen=({navigation})=>{
    return(
      <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{flex:1, alignContent:"center"}}>
        <StatusBar backgroundColor={"transparent"}></StatusBar>
            <ImageBackground
            style={{height:231,width:231, top: 180, left:80}}
            source={require("../../../../assets/AppIcon.png")}/>
            <Title style={{top:60}}>WELCOME TO UNIGUIDE</Title>
            <Text style={{fontSize:20, color:"#9C9C9C", paddingTop:190, paddingBottom:30, alignSelf:"center", fontFamily:"VarelaRound_400Regular"}}>
              Guide to your ideal university
            </Text>
            <View style={{paddingBottom:40}}>
              <AuthButton onPress={()=>navigation.navigate("Register")}>
                <Text style={{color:"black", alignSelf:"center",fontSize:16, paddingTop:10, fontFamily:"MPLUSRounded1c_400Regular"}}>
                  Sign up
                </Text>
              </AuthButton>
            </View>
              <View style={{paddingBottom:40}}>
              <AuthButton onPress={()=>navigation.navigate("Login")}>
                <Text style={{color:"black",alignSelf:"center", paddingTop:10, fontSize:16, fontFamily:"MPLUSRounded1c_400Regular"}}>
                  Log in
                </Text>
              </AuthButton>
            </View>
       </LinearGradient>
    )
}