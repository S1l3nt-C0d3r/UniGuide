import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { QuestionnaireScreen } from "../../features/account/screens/questionairre.screen";

const Stack=createStackNavigator();

export const AccountNavigator=({ initialRouteName = "Main" })=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={initialRouteName}>
            <Stack.Screen name="Main" component={AccountScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}