import * as FileSystem from 'expo-file-system';

const path = FileSystem.documentDirectory + "userPreferences.json";

export const savePreferencesToFile = async (prefs) => {
  try {
    await FileSystem.writeAsStringAsync(path, JSON.stringify(prefs));
    console.log("✅ Preferences saved to file:", path);
  } catch (e) {
    console.error("❌ Error saving preferences:", e);
  }
};

export const loadPreferencesFromFile = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(path);
    if (!fileInfo.exists) {
      console.warn("⚠️ Preferences file does not exist yet.");
      return null;
    }

    const content = await FileSystem.readAsStringAsync(path);
    const prefs = JSON.parse(content);
    console.log("📂 Loaded preferences from file:", prefs);
    return prefs;
  } catch (e) {
    console.error("❌ Error loading preferences:", e);
    return null;
  }
};
