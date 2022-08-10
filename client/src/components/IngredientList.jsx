/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import Ingredient from './Ingredient.jsx';

function IngredientList({recipe}) {
  const {ingredients, servings} = recipe;

  /*----- RENDER METHODS -----*/
  const renderIngredientList = () => {
    return ingredients.map((ingredient, index) => {
      return <Ingredient key={'ingedient' + index} ingredient={ingredient} servings={servings}/>
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

/*========== STYLES ==========*/
