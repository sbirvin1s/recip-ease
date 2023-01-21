/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

/*========== INTERNAL MODULES ==========*/
import { default as app } from '../firebase';
// import { auth } from '../firebase';


const AuthContext = React.createContext();

/*========== EXPORTS ==========*/

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const auth = getAuth(app);

  /*----- STATE HOOKS -----*/
  const [currentUser, setCurrrentUser] = useState();

  /*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrrentUser(user)
    })

    return unsubscribe;
  }, [])

  /*----- EVENT HANDLERS -----*/
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });




    // return auth.createUserWithEmailAndPassword(email, password);



  }

  const value = {
    currentUser,
    signUp,
  }

  /*----- RENDERER -----*/
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
