/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState } from 'react';


/*========== INTERNAL MODULES ==========*/

const UserContext = React.createContext();

/*========== EXPORTS ==========*/

export function useUserInfo() {
  return useContext(UserContext)
}

export function UserProvider({ children }) {

  /*----- STATE HOOKS -----*/
  const [userInfo, setUserInfo] = useState();

  /*----- LIFECYCLE METHODS -----*/

  /*----- EVENT HANDLERS -----*/
  const updateUserInfo = ({ target:{ name, value } }) => {
    event.preventDefault();
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }


  /*----- RENDERER -----*/
  return (
    <UserContext.Provider
      value={{
        userInfo,
        updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
