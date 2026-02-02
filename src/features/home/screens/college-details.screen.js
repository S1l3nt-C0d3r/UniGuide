import React from "react";
import {View, Text } from "react-native";
import { SafeArea } from "../../../components/Utilities/safe-area.component";
import { CollegeDetailInfo } from "../components/college-detailed-info";
export const CollegeDetailScreen=({route})=>{
    const {college}=route.params
    return(
            <CollegeDetailInfo college={college}/>
    )
}