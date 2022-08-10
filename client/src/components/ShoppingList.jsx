/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';


/*========== INTERNAL MODULES ==========*/
import IngredientList from './IngredientList.jsx';


function ShoppingList({recipes}) {
  /*----- STATE HOOKS -----*/
  const [list, setList] = useState([]);
  // const [recipeList, setRecipeList] = useState(recipes);


  /*----- LIFESTYLE METHODS -----*/
  // TODO: create a useEffect that pulls local storage data into state
  // TODO: create a useEffect that pushes new state into local storage
  // useEffect(() => setRecipeList(recipes), [recipes]);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderShoppingList = () => {
    // TODO: map information and push info into each Item
    return recipes.map((recipe, index) => <IngredientList key={`${index}${recipe.recipeName}`} recipe={recipe}/>)
  }


  /*----- RENDERER -----*/
  return (
    // TODO: figure out a way to iterate over all list objects and add similiar ingredients together instead of making a new ingredient line
    <>
      <h3>This is where the shopping list goes</h3>
      {renderShoppingList()}
    </>
  )
}


/*========== EXPORTS ==========*/
export default ShoppingList;