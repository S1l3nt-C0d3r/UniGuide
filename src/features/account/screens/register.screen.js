// ✅ REGISTER SCREEN WITH VALIDATION
import React, { useState, useContext } from "react";
import {
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { Text, View, StatusBar, Alert } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading, setError } = useContext(AuthenticationContext);

  const handleRegister = async () => {
    setError(null);
    if (!email || !password || !repeatedPassword) {
      return Alert.alert("Missing Fields", "Please fill in all fields.");
    }
    if (password !== repeatedPassword) {
      return Alert.alert("Password Mismatch", "Passwords do not match.");
    }
    if (error=="auth/invalid-email"){
      return Alert.alert("Ivalid Email", "Please enter a valid Email Address");
    }
    await onRegister(email, password, repeatedPassword);
  };

  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" translucent />
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Title style={{ top: 70 }}>WELCOME TO UNIGUIDE</Title>
        <Text style={{ color: "#9C9C9C", fontSize: 20, paddingBottom: 30, paddingTop: 180 }}>
          Let's get you signed up
        </Text>

        {["Email", "Password", "Repeat Password"].map((label, index) => (
          <View key={index} style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
            <Text style={{ color: "white", fontSize: 16, paddingBottom: 10 }}>{label}</Text>
            <AuthInput
              placeholder={`Enter your ${label.toLowerCase()}`}
              value={label === "Email" ? email : label === "Password" ? password : repeatedPassword}
              onChangeText={(text) => {
                if (label === "Email") setEmail(text);
                else if (label === "Password") setPassword(text);
                else setRepeatedPassword(text);
              }}
              secureTextEntry={label !== "Email"}
              textContentType={label === "Email" ? "emailAddress" : "password"}
              autoCapitalize="none"
              cursorColor="white"
              textColor="white"
              placeholderTextColor="#A0A0A0"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
            />
          </View>
        ))}

        {error && <Text style={{ color: "red", paddingBottom: 10 }}>{error}</Text>}

        <View style={{ paddingBottom: 20 }}>
          {!isLoading ? (
            <AuthButton onPress={handleRegister}>
              <Text style={{ color: "black", fontSize: 16, paddingTop: 10, alignSelf: "center" }}>
                Sign up
              </Text>
            </AuthButton>
          ) : (
            <ActivityIndicator animating color="white" />
          )}
        </View>

        <Spacer size="large">
          <AuthButton onPress={() => navigation.goBack()}>
            <Text style={{ color: "black", fontSize: 16, paddingTop: 10, alignSelf: "center" }}>
              Back
            </Text>
          </AuthButton>
        </Spacer>
      </ScrollView>
    </LinearGradient>
  );
};
