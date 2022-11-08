/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled, {createGlobalStyle} from 'styled-components';
// import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import ShoppingList from './ShoppingList.jsx';
import AddRecipe from './AddRecipe.jsx';
import Recipes from './Recipes.jsx';
import logo from '../../dist/recip-ease.png';
import background from '../../../background.png';



/*========== EXPORTS ==========*/
export default function Home() {

  /*----- STATE HOOKS -----*/
    const [showForm, setShowForm] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(false);
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

  // const renderAddRecipe = () => <button variant='contained' size='large' onClick={() => setShowForm(true)}>Add Recipe</button>

  // const renderSearchRecipes = () => {
  //   return (
  //     // launches search recipes modal
  //     <button variant='contained' size='large' onClick={() => setShowSearchForm(true)}>Search Recipes</button>
  //   )
  // }

  // const renderAddRecipeForm = () => {
  //   return <AddRecipe showForm={showForm} setShowForm={setShowForm} setRecipes={setRecipes}/>
  // }

  // const renderSearchRecipeForm = () => {
  //   return <Recipes showSearchForm={showSearchForm} setShowSearchForm={setShowSearchForm} setRecipes={setRecipes}/>
  // }

  // const renderClearShoppingList = () => {
  //   if (recipes && recipes.length > 0) {
  //     return (
  //     <button onClick={handleClear}>Clear List</button>
  //     )
  //   }
  // }

  // const renderMenu = () => {
  //   return (
  //     <Menu></Menu>
  //   )
  // }



  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        <h1>Home Page</h1>
      </Page>
    </>
  )
}




/*========== STYLES ==========*/

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  `;
