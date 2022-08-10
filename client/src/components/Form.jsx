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
  const [ingredient, setIngredient] = useState();
  const [recipe, setRecipe] = useState({recipeName: '', servings: 0, ingredients: []});

  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/
  const handleIngredient = ({target: {name, value}}) => {
    setIngredient(prev => ({
      ...prev,
      [name]: value
    }))

    // setRecipe(prev => ({
    //   ingredients: [
    //     ...prev,
    //     ingredient
    //   ]
    // }))
  }

  const handleRecipe = ({target: {name, value}}) => {
    setRecipe(prev => ({
      ...prev,
      recipeName: value
    }));
  }

  const handleServings = ({target: {name, value}}) => {
    setRecipe(prev => ({
      ...prev,
      servings: value
    }));
  }

  const handleSubmit = ({target: {name, value}}) => {
    event.preventDefault();

  }

  const handleAddIngredient = () => {
    event.preventDefault();
    setRecipe(prev => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        ingredient
      ]
    }))
  }


  /*----- RENDER METHODS -----*/
  const renderRecipe = () => {
    // map information and push info into each item
    // return item as an ul element
  }

  const renderEnterIngredient = () => {
    return (
      <>
        <label>Ingredient Name <input type='text' name='ingredientName' placeholder='cheese' onChange={handleIngredient}></input></label>
        <label>Quantity <input type='number' name='quantity' placeholder='0' onChange={handleIngredient}></input></label>
        <label>Units
          <input list='units' name='units' onChange={handleIngredient}/>
          <datalist id='units' >
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
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </>
    )
  }

  const renderSubmit = () => {

  }

  const renderAddIngredient = () => {
    return (
      <button>Add Ingredient</button>
    )
  }

  /*----- RENDERER -----*/
  return ReactDOM.createPortal (
    <div onClick={() => setShowForm(false)}>
      <form>
        <h3>This is a form</h3>
        <label>Number of Servings<input type='number' placeholder='1' onChange={handleServings}></input></label>
        <label>Recipe Name <input type='text' name='recipeName' placeholder='Grilled Cheese' onChange={handleRecipe}></input></label>
        {/* {renderList()} */}
        {renderEnterIngredient()}
        {renderEnterIngredient()}
      </form>
    </div>,
    document.getElementById('portal')
  )
}


/*========== EXPORTS ==========*/
export default Form;