import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LogoutButton = () => {
  const { handleLogout } = useContext(AuthenticationContext);

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ff3b30",
    marginHorizontal:30,
    paddingHorizontal:135,
    paddingVertical:12,
    flexDirection:"row",
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontFamily:"MPLUSRounded1c_400Regular",
    fontSize: 16,
    alignSelf:"center"
  },
});
