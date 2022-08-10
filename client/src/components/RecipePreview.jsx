/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';

/*========== INTERNAL MODULES ==========*/

function RecipePreview({ingredients}) {

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/

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