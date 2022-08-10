/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';

/*========== INTERNAL MODULES ==========*/
import Item from './Item.jsx';

function IngredientList({recipe}) {
  const {ingredients, servings} = recipe;

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderIngredientList = () => {
    return ingredients.map((ingredient, index) => {
      return (
        <div key={'ingedient' + index}>
          <p>{ingredient.name}</p>
          <p>Quantity: {ingredient.quantity * servings}</p>
          <p>{ingredient.units}</p>
        </div>
      )
    })
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
