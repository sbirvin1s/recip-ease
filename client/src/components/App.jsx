/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import ShoppingList from './ShoppingList.jsx';
import Form from './Form.jsx';


function App() {

  /*----- STATE HOOKS -----*/
  const [recipe, setRecipe] = useState({recipeName: '', ingredients: {name:'', quantity: 0, units: ''}});
  const [showForm, setShowForm] = useState(false);

  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/
  const handleChange = ({target: {name, value}}) => {

  }

  const handleSubmit = ({target: {name, value}}) => {
    event.preventDefault();

  }


  /*----- RENDER METHODS -----*/
  const renderAddRecipe = () => {
    return (
      // launches add recipe modal
      <button>Add Recipe</button>
      )
    }

  const renderSearchRecipes = () => {
    return (
      // launches search recipes modal
      <button>Search Recipes</button>
    )
  }

  const renderAddRecipeForm = () => {
    return <Form showForm={showForm} setShowForm={setShowForm} />
  }

  const renderSearchRecipeForm = () => {
    // return <Form showForm={showForm} setShowForm={setShowForm} />
  }

  /*----- RENDERER -----*/
  return (
    <>
      <h1>This is React</h1>
      <div>{renderAddRecipe()}{renderSearchRecipes()}</div>
      <ShoppingList />
      {renderAddRecipeForm()}
      {/* {renderSearchRecipeForm()} */}
    </>
  )
}


/*========== EXPORTS ==========*/
export default App;