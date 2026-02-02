import React, { useState, createContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../App";
import { loginRequest, registerRequest } from "./authentication.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [onBoarded, setOnBoarded] = useState(false);
  const [preferences, setPreferences] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(async (u) => {
        setUser(u.user);
        setIsAuthenticated(true);

        let prefs = null;

        const rawPrefs = await AsyncStorage.getItem(email);
        prefs = rawPrefs ? JSON.parse(rawPrefs) : null;

        if (!prefs) {
          try {
            const db = getFirestore();
            const docRef = doc(db, "users", email);
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
              prefs = snapshot.data();
              console.log("✅ Loaded preferences from Firestore for:", email);
            } else {
              console.warn("⚠️ No Firestore preferences found");
            }
          } catch (e) {
            console.error("❌ Firestore fetch error:", e);
          }
        }

        if (prefs) {
          await AsyncStorage.setItem("userPreferences", JSON.stringify(prefs));
          await AsyncStorage.setItem(email, JSON.stringify(prefs));
          await AsyncStorage.setItem("onBoarded", "true");
          setPreferences(prefs);
          setOnBoarded(true);
        } else {
          setOnBoarded(false);
        }

        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Passwords need to match");
      setIsLoading(false);
      return;
    }
    registerRequest(email, password)
      .then((u) => {
        setUser(u.user);
        setIsAuthenticated(true);
        setIsLoading(false);
        AsyncStorage.setItem("onBoarded", "false");
        setOnBoarded(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
      });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setOnBoarded(false);
      setUser(null);
      setPreferences(null);
      await AsyncStorage.removeItem("userPreferences");
      await AsyncStorage.removeItem("onBoarded");
      console.log("🧹 Logged out and cleared session cache");
    } catch (e) {
      console.error("❌ Logout failed:", e.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usr) => {
      if (usr) {
        setUser(usr);
        setIsAuthenticated(true);
        const rawPrefs = await AsyncStorage.getItem(usr.email);
        const prefs = rawPrefs ? JSON.parse(rawPrefs) : null;
        if (prefs) {
          await AsyncStorage.setItem("userPreferences", JSON.stringify(prefs));
          setPreferences(prefs);
          setOnBoarded(true);
        } else {
          setOnBoarded(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
        setOnBoarded(false);
        setPreferences(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        onBoarded,
        setOnBoarded,
        onLogin,
        onRegister,
        handleLogout,
        setError,
        preferences,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
