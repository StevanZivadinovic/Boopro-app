import { createContext, useContext, useEffect, useState } from "react";
// @ts-ignore
import { auth } from "../../config/Firebase.js";

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";


export const AuthContext = createContext({
  user: {},
  logIn: {},
  logOut: {},
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function User() {
  return useContext(AuthContext);
}
