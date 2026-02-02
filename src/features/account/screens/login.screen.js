// ✅ LOGIN SCREEN WITH VALIDATION
import React, { useState, useContext } from "react";
import {
  AuthButton,
  AuthInput,
  Title,
} from "../components/account.styles";
import { ActivityIndicator } from "react-native-paper";
import { Text, View, StatusBar, Alert } from "react-native";
import { Spacer } from "../../../components/Spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading, setError } = useContext(AuthenticationContext);

  const handleLogin = async () => {
    setError(null);
    if (!email || !password) {
      return Alert.alert("Missing Fields", "Please enter both email and password.");
    }
    if (error=="auth/invalid-email"){
          return Alert.alert("Invalid Email", "Please enter a valid Email Address");
        }
    if (error=="auth/invalid-credential"){
          return Alert.alert("Invalid Email or Password", "Please retry");
    }
    await onLogin(email, password);
  };

  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{ flex: 1 }}>
      <StatusBar translucent={true}/>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Title>WELCOME TO UNIGUIDE</Title>
        <Text style={{ color: "#9C9C9C", fontSize: 20, paddingBottom: 40, paddingTop: 250 }}>
          Glad to have you back 😁
        </Text>

        {["Email", "Password"].map((label, index) => (
          <View key={index} style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
            <Text style={{ color: "white", fontSize: 16, paddingBottom: 10 }}>{label}</Text>
            <AuthInput
              placeholder={`Enter your ${label.toLowerCase()}`}
              value={label === "Email" ? email : password}
              onChangeText={(text) => label === "Email" ? setEmail(text) : setPassword(text)}
              secureTextEntry={label === "Password"}
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
            <AuthButton onPress={handleLogin}>
              <Text style={{ color: "black", fontSize: 16, paddingTop: 10, alignSelf: "center" }}>
                Log in
              </Text>
            </AuthButton>
          ) : (
            <ActivityIndicator animating color="white" />
          )}
        </View>

        <AuthButton onPress={() => navigation.goBack()}>
          <Text style={{ color: "black", fontSize: 16, paddingTop: 10, alignSelf: "center" }}>
            Back
          </Text>
        </AuthButton>
      </ScrollView>
    </LinearGradient>
  );
};
