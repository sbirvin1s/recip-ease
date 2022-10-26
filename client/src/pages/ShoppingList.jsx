/*========== EXTERNAL MODULES ==========*/
import React from 'react';


/*========== INTERNAL MODULES ==========*/
import IngredientList from './components/IngredientList.jsx';


function ShoppingList({recipes}) {

  /*----- RENDER METHODS -----*/
  const renderShoppingList = () => {
    if (recipes) {
      return recipes.map((recipe, index) => <IngredientList key={'shoppingList' + index} recipe={recipe}/>)
    }
  }


  /*----- RENDERER -----*/
  // TODO: figure out a way to iterate over all list objects and add similiar ingredients together instead of making a new ingredient line

  return (
    <>
      {renderShoppingList()}
    </>
  )
}


/*========== EXPORTS ==========*/
export default ShoppingList;


/*========== STYLES ==========*/