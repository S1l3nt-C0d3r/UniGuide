import styled from "styled-components";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import { Image } from "react-native-svg";

export const CollegeCard = styled(Card)`
    padding:${(props)=>props.theme.space[2]};
    background-color:${(props) => props.theme.colors.ui.quaternary}`;

export const CollegeCardCover = styled(Card.Cover)`
    padding:${(props)=>props.theme.space[2]};
    background-color:${(props) => props.theme.colors.ui.quaternary};
`;

export const Address = styled(Text)`
    font-family:${(props)=>props.theme.fonts.body};
    font-size: ${(props)=>props.theme.fontSizes.caption};
    color: ${(props) => props.theme.colors.ui.primary};
`;


export const Info = styled(View)`
padding:${(props)=>props.theme.space[2]};
`;


export const Rating = styled(View)`
flex-direction: row;
padding-top:${(props)=>props.theme.space[2]};
padding-bottom:${(props)=>props.theme.space[2]};
`;


export const Section = styled(View)`
flex-direction: row;
align-items: center;
`;


export const Sectionend = styled(View)`
flex:1;
flex-direction: row;
justify-content: flex-end;
`;


export const Icon=styled.Image`
 width:15px;
 height:15px;`;