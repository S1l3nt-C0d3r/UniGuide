import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { auth } from '../../../../App';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { getFirestore, doc, setDoc } from "firebase/firestore";

const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "All"
];

const Option = ({ label, selected, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingVertical: 14,
      paddingHorizontal: 20,
      backgroundColor: selected ? "#fff" : "transparent",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 14,
      margin: 6,
      flexGrow: 1,
      alignItems: "center",
    }}
  >
    <Text style={{ color: selected ? "#000" : "#fff", fontFamily: "MPLUSRounded1c_700Bold", fontSize:16 }}>{label}</Text>
  </TouchableOpacity>
);

export const QuestionnaireScreen = ({ navigation }) => {
  const [stream, setStream] = useState('');
  const [collegeType, setCollegeType] = useState('');
  const [preferredStates, setPreferredStates] = useState([]);
  const { setOnBoarded } = useContext(AuthenticationContext);
  const db = getFirestore();

  const toggleState = (state) => {
  if (state === "All") {
    setPreferredStates(["All"]);
  } else {
    let updated = preferredStates.includes(state)
      ? preferredStates.filter((s) => s !== state)
      : [...preferredStates.filter((s) => s !== "All"), state];

    setPreferredStates(updated);
  }
};


  const onBoarding = async () => {
    const email = auth.currentUser?.email || "Anonymous";

    const updatedPrefs = {
      username: email,
      stream,
      collegeType,
      preferredStates,
    };

    try {
      await setDoc(doc(db, "users", email), updatedPrefs);
      await AsyncStorage.setItem(email, JSON.stringify(updatedPrefs));
      await AsyncStorage.setItem("userPreferences", JSON.stringify(updatedPrefs));
      await AsyncStorage.setItem("onBoarded", "true");
      setOnBoarded(true);
      console.log("✅ Preferences saved for:", email);
    } catch (e) {
      console.error("❌ Failed to save preferences:", e);
    }
  };

  return (
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{ flex: 1 }}>
      <StatusBar backgroundColor={"transparent"} translucent />
      <ScrollView contentContainerStyle={{ padding: 20, paddingTop:40 }}>
      <Text style={{color:"white",fontWeight:"bold", fontSize:30, marginBottom:20, marginRight:50}}>
        Add your preferences so we can start guiding you
      </Text>
        <Text style={{ color: "white", fontSize: 16, fontFamily: "MPLUSRounded1c_500Medium", marginBottom: 12 }}>
          📖 What stream are you from?
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {["Engineering", "Medical"].map((item) => (
            <Option key={item} label={item} selected={stream === item.toLowerCase()} onPress={() => setStream(item.toLowerCase())} />
          ))}
        </View>

        <Text style={{ color: "white", fontSize: 16, fontFamily: "MPLUSRounded1c_500Medium", marginVertical: 12 }}>
          🏫 What type of college?
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {["Government", "Private", "Both"].map((item) => (
            <Option key={item} label={item} selected={collegeType === item} onPress={() => setCollegeType(item)} style={{width:30}}/>
          ))}
        </View>

        <Text style={{ color: "white", fontSize: 16, fontFamily: "MPLUSRounded1c_500Medium", marginVertical: 12 }}>
          🏙️ Preferred States:
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {statesList.map((state) => (
            <Option
              key={state}
              label={state}
              selected={preferredStates.includes(state)}
              onPress={() => toggleState(state)}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={onBoarding}
          disabled={!stream || !collegeType || preferredStates.length === 0}
          style={{
            backgroundColor: "#fff",
            paddingVertical: 14,
            borderRadius: 20,
            marginTop: 30,
            opacity: !stream || !collegeType || preferredStates.length === 0 ? 0.4 : 1,
          }}
        >
          <Text style={{ textAlign: "center", color: "#000", fontFamily: "MPLUSRounded1c_400Regular", fontSize: 18 }}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};
