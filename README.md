# 🎓 UniGuide
![Platform](https://img.shields.io/badge/platform-Android-brightgreen)
![Built With](https://img.shields.io/badge/built%20with-React%20Native-blue)
![Expo](https://img.shields.io/badge/Expo-SDK%2051-black)
![Firebase](https://img.shields.io/badge/Firebase-Backend-orange)
![License](https://img.shields.io/badge/license-MIT-green)

**UniGuide** is a mobile application designed to help Indian students discover, compare, and track colleges and entrance-exam related information — all in one place.

It provides **personalized college recommendations**, **latest admission news**, and a **clean, distraction-free experience** built specifically for students.

---

## 🚀 Features

### 🔐 Authentication
- Secure Email & Password authentication using Firebase  
- Login, Sign-up, Logout support  
- Persistent session handling  
- Account deletion support (with data cleanup)

---

### 🧭 Onboarding & Personalization
- One-time onboarding questionnaire to understand student preferences:
  - Stream (Engineering / Medical)
  - Preferred college type (Government / Private / Both)
  - Preferred states (All Indian states supported)
- Preferences are securely stored and reused on future logins  
- Users can update preferences anytime from the Profile screen

---

### 🏫 College Discovery
- Personalized **Suggested Colleges** based on user preferences  
- **Other Colleges** section filtered by stream  
- Two-column grid layout for easy browsing  
- Smooth navigation to detailed college pages  
- Fallback UI for colleges without images  
- Optimized rendering for large datasets

---

### 📄 College Details
- College overview  
- Location & state  
- Entrance exams and links  
- Ranking (where available)  
- Graceful image handling (fallback gradients if images are missing)

---

### 📰 Newsletter (Admissions News)
- Curated latest UG admission news for India  
- Backend-refreshed news (not dependent on user refresh)  
- Optimized API usage (common dataset shared across users)  
- External article links open in browser  
- Clean, readable UI

---

### 👤 Profile
- User profile screen with:
  - Profile photo (gallery upload)
  - Email display
  - Selected stream
  - Change preferences option
  - Logout option
  - Account deletion option
  - Privacy Policy access

---

### 📶 Offline Handling
- Internet connectivity check on app start  
- Dedicated **No Internet** screen for better UX

---

### 📢 Ads & Monetization
- Google AdMob integration  
- Banner Ads  
- Interstitial Ads (shown after controlled user actions)  
- Ads are frequency-controlled (no spammy behavior)  
- **Remove Ads** option via Google Play In-App Purchase  
- Ads are completely disabled after purchase

---

### 🔒 Privacy & Security
- Privacy Policy compliant with:
  - Indian IT Act, 2000  
  - SPDI Rules, 2011  
- Minimal data collection  
- Secure Firestore rules  
- No unnecessary personal data stored  
- Users can request account deletion

---

## 🛠 Tech Stack

### Frontend
- React Native  
- Expo  
- React Navigation  
- Styled Components  
- React Native Paper  
- Expo Linear Gradient  
- Expo Image Picker  
- AsyncStorage  

### Backend & Services
- Firebase Authentication  
- Firestore Database  
- Firebase Hosting  
- External News APIs (server-side refresh)

### Ads & Payments
- Google AdMob  
- Google Play In-App Purchases  
- react-native-google-mobile-ads  
- expo-iap  

---

## 📱 Platforms
- ✅ Android (Production-ready)  
- 🚧 iOS (Planned)

---

## 🧪 Build & Testing
- Development builds supported  
- Production APK / AAB builds supported  
- Google Play Console ready  
- Ad test IDs used in development mode

---

## 📄 Privacy Policy
A complete Privacy Policy is included and publicly accessible.

Users can also request account deletion via the provided contact email.

---

## 🤝 Contribution
Currently a solo project, but contributions are welcome in the future.

Feel free to fork, explore, or raise issues.

---

## ❤️ Acknowledgements
Built with a focus on:
- Students  
- Simplicity  
- Real-world usability  
- Sustainable monetization  

---

## ⭐ Star the Repo
If you like **UniGuide** or found it useful, consider starring the repository ⭐  
It helps a LOT.
