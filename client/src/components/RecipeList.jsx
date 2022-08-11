/*========== EXTERNAL MODULES ==========*/
import React from 'react';

/*========== INTERNAL MODULES ==========*/
import Recipe from './Recipe.jsx';

function RecipeList({recipes, selectedRecipes, setSelectedRecipes}) {

  /*----- RENDER METHODS -----*/
  const renderRecipeList = () => {
    if (recipes) {
      return recipes.map((recipe, index) => {
        return <Recipe key={'recipe' + index} recipe={recipe} selectedRecipes={selectedRecipes} setSelectedRecipes={setSelectedRecipes}/>
      })
    }
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
