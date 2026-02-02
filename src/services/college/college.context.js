import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collegeRequest } from "./college.service";

export const CollegeContext = createContext();

export const CollegeContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [collegeSections, setCollegeSections] = useState([]);
  const [rawColleges, setRawColleges] = useState({ suggested: [], others: [] });
  const [keyword, setKeyword] = useState("");

  const chunk = (arr, size) => {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };

  const applySearchFilter = (suggested, others, keyword) => {
    const filteredSuggested = keyword
      ? suggested.filter((c) =>
          c.name.toLowerCase().includes(keyword.toLowerCase())
        )
      : suggested;

    const filteredOthers = keyword
      ? others.filter((c) =>
          c.name.toLowerCase().includes(keyword.toLowerCase())
        )
      : others;

    const sections = [];

    if (filteredSuggested.length > 0) {
      sections.push({ title: "Suggested Colleges", data: chunk(filteredSuggested, 2) });
    }

    if (filteredOthers.length > 0) {
      sections.push({ title: "Other Colleges", data: chunk(filteredOthers, 2) });
    }

    return sections;
  };

  const loadColleges = async () => {
    setLoading(true);
    try {
      const prefsRaw = await AsyncStorage.getItem("userPreferences");
      const prefs = prefsRaw ? JSON.parse(prefsRaw) : null;
      if (!prefs) throw new Error("Preferences not found");

      console.log("🎯 Loaded preferences:", prefs);

      const { suggested, others } = await collegeRequest(prefs);
      setRawColleges({ suggested, others });

      const sections = applySearchFilter(suggested, others, keyword);
      setCollegeSections(sections);
      setError(null);
    } catch (err) {
      console.error("❌ College load error:", err);
      setCollegeSections([]);
      setError(err.message || "Failed to load colleges");
    }
    setLoading(false);
  };

  const search = (query) => {
    setKeyword(query);
    const sections = applySearchFilter(rawColleges.suggested, rawColleges.others, query);
    setCollegeSections(sections);
  };

  useEffect(() => {
    loadColleges();
  }, []);

  return (
    <CollegeContext.Provider
      value={{
        loading,
        error,
        collegeSections,
        refresh: loadColleges,
        keyword,
        search,
      }}
    >
      {children}
    </CollegeContext.Provider>
  );
};
