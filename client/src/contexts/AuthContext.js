/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState, useEffect } from 'react';

/*========== INTERNAL MODULES ==========*/
import { auth } from '../firebase';


const AuthContext = React.createContext();

/*========== EXPORTS ==========*/

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  /*----- STATE HOOKS -----*/
  const [currentUser, setCurrrentUser] = useState();


  const value = {
    currentUser,
    signUp,
  }

  /*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrrentUser(user)
    })

    return unsubscribe;
  }, [])

  /*----- EVENT HANDLERS -----*/
  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  /*----- RENDERER -----*/
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
