/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import ReactDOM from 'react-dom';


/*========== INTERNAL MODULES ==========*/
import Item from './Item.jsx';


function Form({showForm, setShowForm}) {
  if (!showForm) {
    return null;
  }

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderList = () => {
    // map information and push info into each item
    // return item as an ul element
  }

  const renderEnterIngredient = () => {
    const renderRecipeNameInput = () => {
      return (
        <label>Recipe Name <input type='text' name='recipeName' placeholder='Grilled Cheese'></input></label>
      )
    }

    const renderIngredientNameInput = () => {
      return (
        <label>Ingredient Name <input type='text' name='ingredientName' placeholder='cheese'></input></label>
      )
    }

    const renderQuantityInput = () => {
      return (
        <label>Quantity <input type='number' name='quantity' placeholder='0'></input></label>
      )
    }

    const renderUnitsInput = () => {
      return (
        <label>Units
          <input list='units' name='units' />
          <datalist id='units'>
            <option value='tsp'/>
            <option value='Tbsp'/>
            <option value='oz'/>
            <option value='lb'/>
            <option value='c'/>
            <option value='g'/>
            <option value='ml'/>
            <option value='pinch'/>
            <option value='cloves'/>
            <option value='count'/>
          </datalist>
        </label>
      )
    }
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal (
    <div onClick={() => setShowForm(false)}>
      <form>
        <h3>This is a form</h3>
        {/* {renderList()} */}
        {renderEnterIngredient()}
      </form>
    </div>,
    document.getElementById('portal')
  )
}


/*========== EXPORTS ==========*/
export default Form;