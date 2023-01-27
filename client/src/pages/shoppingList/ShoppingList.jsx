/*========== EXTERNAL MODULES ==========*/
import React from 'react';


/*========== INTERNAL MODULES ==========*/
import IngredientList from '../../components/IngredientList.jsx';

/*========== EXPORTS ==========*/
export default function ShoppingList({recipes}) {

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
      <h1>Shopping List View</h1>
      {/* {renderShoppingList()} */}
    </>
  )
}


/*========== STYLES ==========*/