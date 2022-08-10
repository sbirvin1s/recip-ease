/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';

/*========== INTERNAL MODULES ==========*/
import Item from './Item.jsx';

function IngredientList({recipe}) {
  console.log(recipe);

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderIngredientList = () => {
    return recipe.map(ingredient => <p>this will be an item</p>)
  }

  /*----- RENDERER -----*/
  return (
    <>
      {renderIngredientList()}
    </>
  )
}


/*========== EXPORTS ==========*/
export default IngredientList;
