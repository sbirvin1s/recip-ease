/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import ShoppingList from './ShoppingList.jsx';
import Form from './Form.jsx';


function App() {

  /*----- STATE HOOKS -----*/
    const [showForm, setShowForm] = useState(false);
    const [recipes, setRecipes] = useState([]);

  /*----- LIFESTYLE METHODS -----*/
  useEffect(() =>  {
      const localRecipes = Object.keys(localStorage);
      const newRecipes = localRecipes.map(recipe => localRecipes[recipe] = JSON.parse(localStorage[recipe]))
      setRecipes(newRecipes);
  }, [localStorage]);

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
    return <Form showForm={showForm} setShowForm={setShowForm} setRecipes={setRecipes}/>
  }

  const renderSearchRecipeForm = () => {
    // return <Form showForm={showForm} setShowForm={setShowForm} />
  }

  /*----- RENDERER -----*/
  return (
    <Page>
      <h1>Recip*Ease</h1>
      <div>{renderAddRecipe()}{renderSearchRecipes()}</div>
      <ShoppingList recipes={recipes}/>
      {renderAddRecipeForm()}
      {/* {renderSearchRecipeForm()} */}
    </Page>
  )
}


/*========== EXPORTS ==========*/
export default App;


/*========== STYLES ==========*/

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;