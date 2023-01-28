/*========== EXTERNAL MODULES ==========*/
import React, { useContext, useState } from 'react';


/*========== CONTEXTS ==========*/

const UserContext = React.createContext();

/*========== EXPORTS ==========*/

export function useUserInfo() {
  return useContext(UserContext)
}

export function UserProvider({ children }) {

  /*----- STATE HOOKS -----*/
  const [userInfo, setUserInfo] = useState();

  /*----- EVENT HANDLERS -----*/
  const updateUserInfo = ({ target:{ name, value } }) => {
    event.preventDefault();
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const updateInfo = info => {
    event.preventDefault();
    setUserInfo(info);
  }

  const updateSpecificInfo = (name, value) => {
    event.preventDefault();
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }

  /*----- RENDERER -----*/
  return (
    <UserContext.Provider
      value={{
        userInfo,
        updateInfo,
        updateUserInfo,
        updateSpecificInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
