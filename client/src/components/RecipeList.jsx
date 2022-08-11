/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import Recipe from './Recipe.jsx';

function RecipeList() {


  /*----- RENDER METHODS -----*/
  const renderRecipeList = () => {
    return <p>Placeholder List</p>
    // return ingredients.map((ingredient, index) => {
    //   return <Recipe key={'ingedient' + index} ingredient={ingredient} servings={servings}/>
    // })
  }

  /*----- RENDERER -----*/
  return (
    <>
      {renderRecipeList()}
    </>
  )
}


/*========== EXPORTS ==========*/
export default RecipeList;

/*========== STYLES ==========*/
