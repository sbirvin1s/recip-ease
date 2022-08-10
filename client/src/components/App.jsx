/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import ShoppingList from './ShoppingList.jsx';
import Form from './Form.jsx';


function App() {

  /*----- STATE HOOKS -----*/
    const [showForm, setShowForm] = useState(false);
    const [recipes, setRecipes] = useState([]);

  /*----- LIFESTYLE METHODS -----*/
  // TODO: pull data from local storage into state so that it can be passed into Shopping List
  useEffect(() =>  setRecipes(localStorage), [localStorage]);

  /*----- EVENT HANDLERS -----*/
  const handleChange = ({target: {name, value}}) => {

  }

  const handleSubmit = ({target: {name, value}}) => {
    event.preventDefault();

  }


  /*----- RENDER METHODS -----*/

  const renderAddRecipe = () => <button onClick={() => setShowForm(true)}>Add Recipe</button>

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
      <h1>Recip*Ease</h1>
      <div>{renderAddRecipe()}{renderSearchRecipes()}</div>
      <ShoppingList />
      {renderAddRecipeForm()}
      {/* {renderSearchRecipeForm()} */}
    </>
  )
}


/*========== EXPORTS ==========*/
export default App;