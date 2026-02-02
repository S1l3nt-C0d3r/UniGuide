import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export const CollegeGridCard = ({ college }) => {
  const hasImage = !!college.image;

  return (
    <View style={styles.card}>
      {hasImage ? (
        <Image source={{ uri: college.image }} style={styles.image} />
      ) : (
        <LinearGradient
          colors={["#6190E8", "#A7BFE8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fallbackContainer}
        >
          <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />
          <Text style={styles.fallbackText}>{college.name}</Text>
        </LinearGradient>
      )}
      <Text 
      style={styles.name}
      numberOfLines={1}
      ellipsizeMode="tail"
      >{college.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
    borderRadius: 12,
    overflow:"hidden",
    marginBottom: 12,
    marginHorizontal: 4,
    borderWidth:2,
    borderColor:"white",
  },
  image: {
    width: "100%",
    height: 120,
    borderBottomWidth:2,
    borderBottomColor:"white"
  },
  name: {
    color: "white",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "MPLUSRounded1c_400Regular",
    borderTopWidth:2,
    borderTopColor:"white",
  },
  fallbackContainer: {
    height: 120,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius:12
  },
  fallbackText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
    fontFamily: "MPLUSRounded1c_500Medium"
  },
});
