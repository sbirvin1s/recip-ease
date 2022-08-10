/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';

/*========== INTERNAL MODULES ==========*/

function RecipePreview({ingredients}) {

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/
// useEffect(() => renderRecipe(), [ingredients]);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderRecipe = () => {
    return ingredients.map(({name, quantity, units}, index) => {
      return (
        <div key={name + index}>
          <p>{name}</p>
          <span><p>quantity:{quantity} {units}</p></span>
        </div>
      )
    })
  }

  /*----- RENDERER -----*/
  return (
    <>
      <h3>Added Ingredients</h3>
      {renderRecipe()}
    </>
  )
}


/*========== EXPORTS ==========*/
export default RecipePreview;