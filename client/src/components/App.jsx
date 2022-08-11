/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import ShoppingList from './ShoppingList.jsx';
import Form from './Form.jsx';
import logo from '../../dist/recip-ease.png';
import background from '../../../background.png';



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
  const handleClear = () => {
    localStorage.clear();
    setRecipes([]);
  }

  const handleSubmit = ({target: {name, value}}) => {
    event.preventDefault();

  }


  /*----- RENDER METHODS -----*/

  const renderAddRecipe = () => <Button variant='contained' size='large' onClick={() => setShowForm(true)}>Add Recipe</Button>

  const renderSearchRecipes = () => {
    return (
      // launches search recipes modal
      <Button variant='contained' size='large'>Search Recipes</Button>
    )
  }

  const renderAddRecipeForm = () => {
    return <Form showForm={showForm} setShowForm={setShowForm} setRecipes={setRecipes}/>
  }

  const renderSearchRecipeForm = () => {
    // return <Form showForm={showForm} setShowForm={setShowForm} />
  }

  const renderClearShoppingList = () => {
    if (recipes && recipes.length > 0) {
      return (
      <Button onClick={handleClear}>Clear List</Button>
      )
    }
  }

  /*----- RENDERER -----*/
  return (
    <>
      <GlobalStyle />
      <Page>
        <Header>Recip<Logo src={logo}/>Ease</Header>
        <NavBar>{renderAddRecipe()}{renderSearchRecipes()}</NavBar>
        <ShoppingList recipes={recipes}/>
        {renderAddRecipeForm()}
        {/* {renderSearchRecipeForm()} */}
        {renderClearShoppingList()}
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
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
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

const Logo = styled.img`
  transform: scale(0.5);
  margin: -17px;
`;

const Header = styled.header`
  display: flex;
  width: 90vw;
  margin: 1em;
  background-color: #8ec284;
  /* background-image: url(${background}); */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 32pt;
  /* color: white; */
  font-weight: bold;
`;