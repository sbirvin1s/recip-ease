/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import Ingredient from './Ingredient.jsx';


/*========== EXPORTS ==========*/
export default function IngredientList({recipe}) {
  const {ingredients, servings} = recipe;

  /*----- RENDER METHODS -----*/
  const renderIngredientList = () => {
    console.log(recipe);
    if (ingredients) {
      return ingredients.map((ingredient, index) => {
        return <Ingredient key={'ingedient' + index} ingredient={ingredient} servings={servings}/>
      })
    }
  }

  /*----- RENDERER -----*/
  return (
    <>
      {renderIngredientList()}
    </>
  )
}


/*========== STYLES ==========*/
