import React, { useContext, useCallback } from "react";
import {
  Info,
  NewsCard,
  NewsCardCover,
  NewsDescription,
  NewsImage,
  NewsLoader,
  NewsTitle,
  Container,
  Header,
  AuthorRow,
  AuthorText,
  HeaderText,
  NewsContent,
  DateText,
  IconRow,
  IconButton,
} from "./newsletter-component.styles";
import { NewsletterContext } from "../../../services/newsletter/newsletter.context-service";
import { SafeArea } from "../../../components/Utilities/safe-area.component";
import {
  FlatList,
  TouchableOpacity,
  View,
  Linking,
  StatusBar,
  Text,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Newsletter = () => {
  const { loading, error, articles } = useContext(NewsletterContext);
  const navigation = useNavigation();



  if (loading) {
    return (
      <NewsLoader>
        <ActivityIndicator size="large" color="#00FFA3" />
      </NewsLoader>
    );
  }

  return (
    <>
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{ flex: 1, paddingTop: 30 }}>
      <StatusBar backgroundColor={"transparent"} translucent />
      <View style={{flexDirection:"row", alignSelf:"center"}}>
        <TouchableOpacity style={{ right: 100, paddingTop: 13, paddingLeft:20 }} onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu-outline" color="white" size={35} />
        </TouchableOpacity>
        <HeaderText style={{right:20}}>Newsletter</HeaderText>
      </View>
      <Header />

      <FlatList
        data={articles}
        keyExtractor={(item) => item.link}
        refreshing={loading}
        renderItem={({ item }) => {
          const copyToClipboard = async () => {
            await Clipboard.setStringAsync(item.link);
          };

          const formatDate = (isoDate) => {
            const date = new Date(isoDate);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
          };

          return (
            <NewsCard onPress={() => Linking.openURL(item.link)}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <NewsTitle>{item.title}</NewsTitle>
                <NewsCardCover source={{ uri: item.image_url }} />
              </View>
              <IconRow>
                <AuthorText>{item.creator || "Anonymous"}</AuthorText>
                <DateText>{formatDate(item.pubDate)}</DateText>
                <IconButton style={{ right: 10 }} onPress={copyToClipboard}>
                  <Ionicons name="share-social-outline" size={22} color="white" />
                </IconButton>
              </IconRow>
            </NewsCard>
          );
        }}
      />
    </LinearGradient>
    </>
  );
};
