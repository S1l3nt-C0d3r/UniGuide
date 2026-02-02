import React, { useState, useContext, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  SectionList,
  Button
} from "react-native";
import { MD3DarkTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components";
import { SafeArea } from "../../../components/Utilities/safe-area.component";
import { SearchBar } from "../components/search.component";
import { CollegeContext } from "../../../services/college/college.context";
import { CollegeGridCard } from "../components/college-grid-style";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LinearGradient } from "expo-linear-gradient";
import { BannerAd } from "react-native-google-mobile-ads";

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const { collegeSections, loading, error, refresh } = useContext(CollegeContext);
  const {handleLogout}=useContext(AuthenticationContext)
  const navigation = useNavigation();


 useEffect(()=>{
  refresh();
 },[])
  return (
    <>
      <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{flex:1, paddingTop:30}}>
        <StatusBar backgroundColor={"transparent"} translucent={true}/>
        {loading && (
          <View style={{ position: "absolute", top: "50%", left: "50%" }}>
            <ActivityIndicator
              size={50}
              style={{ marginLeft: -25 }}
              animating={true}
              color={"white"}
            />
          </View>
        )}
        <View>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 6, alignSelf:"center" }}>
          <TouchableOpacity
            style={{ paddingLeft: 10, paddingTop: 14, right:110 }}
            onPress={() => navigation.toggleDrawer()}
          >
            <Ionicons name="menu-outline" color="white" size={35} />
          </TouchableOpacity>
        <Text style={{fontSize:35, color:"white", right:20, paddingTop:9, fontFamily:"EBGaramond_500Medium"}}>Colleges</Text>
        </View>
        <View style={{borderColor:"white", borderBottomWidth:2}}></View>

         <SearchBar/>
        {!error && (
        <View style={{paddingTop:30, paddingBottom:130}}>
          <SectionList
            sections={collegeSections}
            keyExtractor={(item, index) => item.map(i => i.name).join("_") + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  marginLeft: 16,
                  marginTop: 0,
                  paddingBottom: 20,
                  fontFamily:"VarelaRound_400Regular"
                }}
              >
                {title}
              </Text>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 8,
                }}
              >
                {item.map((college, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate("College Details", { college })
                    }
                    style={{ flex: 0.5, margin: 4 }}
                  >
                    <CollegeGridCard college={college} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
        </View>
        )}
      </LinearGradient>
    </>
  );
};
