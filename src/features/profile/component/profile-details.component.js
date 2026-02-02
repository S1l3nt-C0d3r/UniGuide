import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Course:</Text>
      <Text style={styles.value}>Course Name</Text>
      {/* Add more fields here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
    paddingHorizontal: 24,
    width: "100%",
  },
  label: {
    fontSize: 16,
    color: "#bbb",
  },
  value: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 12,
  },
});
