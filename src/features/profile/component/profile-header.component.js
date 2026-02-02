import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { CollegeContext } from "../../../services/college/college.context";

export const ProfileHeader = () => {
  const [image, setImage] = useState(null);
  const {user} = useContext(AuthenticationContext)
  const {preferences} = useContext(AuthenticationContext)

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
    <View style={{paddingRight:20}}>
        <Image
          source={{
            uri:
              image ||
              "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
          }}
          style={styles.avatar}
        />
      <TouchableOpacity style={{borderRadius:40, backgroundColor:"white", borderWidth:1, width:30, height:30, alignItems:"center", alignContent:"center", bottom:40, left:80}} onPress={pickImage}>
      <Ionicons name="pencil-sharp" size={20} color="black" style={{paddingTop:4}}/>
      </TouchableOpacity>
    </View>
    <View style={{paddingBottom:30}}>
      <Text style={styles.username}>Email: {user.email}</Text>
      <Text style={styles.username}>Course: {preferences.stream} </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 16,
    flexDirection:"row",
    marginTop:40
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
  username: {
    fontSize: 20,
    fontFamily:"MPLUSRounded1c_400Regular",
    color: "white",
  },
});
