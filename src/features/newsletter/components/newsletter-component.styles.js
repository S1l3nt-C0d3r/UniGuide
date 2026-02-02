import React from "react";
import {View, Text, FlatList, Image, TouchableOpacity, Linking, ActivityIndicator, StyleSheet} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  padding: 10px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-color:white;
`;

export const HeaderText = styled(Text)`
  color: white;
  font-size: 35px;
  padding-top: 7px;
  font-family:"EBGaramond_500Medium";
`;

export const NewsCard = styled(Card)`
  background-color: transparent;
  padding: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color:rgba(255, 255, 255, 1);
`;

export const NewsContent = styled.View`
  flex: 1;
  flex-direction:row;
  padding-right: 8px;
`;

export const NewsTitle = styled(Text)`
  color: white;
  font-size: 15px;
  font-weight: bold;
  flex:0.7;
  flex-direction:row;
  padding-right:20px
`;

export const AuthorRow = styled.View`
  flex-direction: row;
`;

export const AuthorText = styled.Text`
  color: #ccc;
  font-size: 12px;
`;

export const DateText = styled.Text`
  color: #ccc;
  font-size: 12px;
  padding-left:60px
`;

export const IconRow = styled.View`
  flex-direction: row;
  padding-top: 20px;
`;

export const IconButton = styled(TouchableOpacity)`
    position:absolute;
    padding-top:17px
`;
export const NewsCardCover=styled(Card.Cover)` 
    width:100px;
    height:80px;
    flex:0.3;
    flex-direction:row
`;
