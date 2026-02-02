import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QuestionnaireScreen } from "../../features/account/screens/questionairre.screen";

const Stack=createStackNavigator();

export const OnBoardingNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Questionaire" component={QuestionnaireScreen}/>
        </Stack.Navigator>
    )
}