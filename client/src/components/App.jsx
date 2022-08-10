/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@mui/material/Button';

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

  const renderAddRecipe = () => <Button variant='contained' onClick={() => setShowForm(true)}>Add Recipe</Button>

  const renderSearchRecipes = () => {
    return (
      // launches search recipes modal
      <Button variant='contained'>Search Recipes</Button>
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
    <>
      <GlobalStyle />
      <Page>
        <h1>Recip<img src='../dist/recip-ease.png'/>Ease</h1>
        <NavBar>{renderAddRecipe()}{renderSearchRecipes()}</NavBar>
        <ShoppingList recipes={recipes}/>
        {renderAddRecipeForm()}
        {/* {renderSearchRecipeForm()} */}
      </Page>
    </>
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

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #414141;
    }
  `;

const NavBar = styled.nav`
  display: flex;
  margin-bottom: 2em;
  width: 80vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;