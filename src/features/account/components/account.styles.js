import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import {colors} from "../../../infrastructure/theme/colors"
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled(View)`
  flex: 1;
  align-items: center;
  background-color:black;
  justify-content:center
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
`;

export const AccountContainer=styled.View`
background-color:rgb(0, 0, 0);
padding:${(props)=>props.theme.space[4]};
margin-top:${(props)=>props.theme.space[2]};
`

export const AuthButton=styled(TouchableOpacity)` 
  height:45px;
  width:370px;
  color:white;
  background-color:white;
  border-radius:25px;
  align-self:center;
`

export const AuthInput = styled(TextInput)`
width: 370px;
height:40px;
font-size:15px;
border-radius:30px;
border-color:white;
background-color:transparent;
color:white;
border-width:1px
`;

export const Title = styled(Text)`
  position:absolute;
  top:140px;
  text-align:center;
  font-family:VarelaRound_400Regular;
  font-size: 36px;
  color:white;
  padding:20px;
  padding-bottom:0px;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;