import React,{useContext} from "react";
import { View, Text } from "react-native";
import { AppNavigation } from "./app.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { OnBoardingNavigator } from "./onboarding.navigation";
export const Navigation=()=>{
    const {isAuthenticated, onBoarded}=useContext(AuthenticationContext)
    console.log(onBoarded)
  if (onBoarded === null) {
    return null;
  }
    return(
        <NavigationContainer>
        {
            isAuthenticated?
            (onBoarded?
            (<AppNavigation/>):(<OnBoardingNavigator/>)):(<AccountNavigator/>)
        }
        </NavigationContainer>
    )}