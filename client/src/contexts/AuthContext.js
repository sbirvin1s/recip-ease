/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

/*========== INTERNAL MODULES ==========*/
import { default as app } from '../firebase';

const AuthContext = React.createContext();

/*========== EXPORTS ==========*/

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const auth = getAuth(app);

  /*----- STATE HOOKS -----*/
  const [currentUser, setCurrrentUser] = useState();
  const [loading, setLoading] = useState(true);

  /*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrrentUser(user);
      setLoading(false);
    })

    return unsubscribe;
  }, [])

  /*----- EVENT HANDLERS -----*/
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  }

  /*----- RENDERER -----*/
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
