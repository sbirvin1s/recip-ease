/*========== EXTERNAL MODULES ==========*/
import React, {useContext, useState } from 'react';


/*========== CONTEXTS ==========*/

const RecipeContext = React.createContext();

/*========== EXPORTS ==========*/

export function addRecipe() {
  return useContext(UserContext)
}

export function RecipeProvider({ children }) {

  /*----- STATE HOOKS -----*/
  const [newRecipe, setNewRecipe] = useState();
  const [ingredientList, setIngredientList] = useState();


  /*----- EVENT HANDLERS -----*/
  const addNewRecipe = ({ target:{ name, value } }) => {
    event.preventDefault();
    setNewRecipe(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const addIngredient = ({ target:{ name, value } }) => {
    event.preventDefault();
    setIngredientList(prev => ({
      ...prev,
      [name]: value
    }))
  }

  /*----- RENDERER -----*/
  return (
    <RecipeContext.Provider
      value={{
        addNewRecipe,
        addIngredient,
      }}
    >
      {children}
    </RecipeContext.Provider>
  )
}
