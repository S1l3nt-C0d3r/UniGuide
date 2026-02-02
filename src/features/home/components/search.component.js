import React, {useContext, useState, useEffect} from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { CollegeContext } from "../../../services/college/college.context";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@react-native-vector-icons/ionicons';

const SearchContainer = styled(View)`
padding:${(props)=>props.theme.space[2]};
paddingTop:0px;
paddingBottom:${(props)=>props.theme.space[3]};
paddingRight:${(props)=>props.theme.space[2]};
paddingLeft:20px;
justifyContent:'center';
alignItems:'center';
backgroundColor:'black';
flex:1;
`
export const SearchBar=()=>{
    const {keyword, search}=useContext(CollegeContext)
    const [searchKeyword, setSearchKeyword]=useState(keyword)
    const navigation=useNavigation()
    useEffect(()=>{
            setSearchKeyword(keyword);
        },[keyword])
    return(
    <SearchContainer style={{paddingTop:20, paddingBottom:40,paddingRight:10, paddingLeft:10}}>
        <Searchbar
            placeholder="Search for a college"
            value={searchKeyword}
            onChangeText={(text)=>{
                setSearchKeyword(text)
                search(text);
            }}
            style={{backgroundColor:"transparent",
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 4,
                    height:50,
                    }}
            placeholderTextColor="#E5E4E2"
            inputStyle={{color:"#E5E4E2", minHeight:0}}
        />
    </SearchContainer>
    );
}