import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../App";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth,email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth,email, password);
};

export const logoutRequest = () => {
  return signOut(auth);
};
