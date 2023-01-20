/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState } from 'react';


const AuthContext = React.createContext();

/*========== EXPORTS ==========*/

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  /*----- STATE HOOKS -----*/
  const [currentUser, setCurrrentUser] = useState();


  const value = {
    currentUser
  }

  /*----- RENDERER -----*/
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
