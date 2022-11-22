/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import { matchPath, Link, Outlet, redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import Home from './Home.jsx';
import ShoppingList from './ShoppingList.jsx';
import AddRecipe from './AddRecipe.jsx';
import AddIngredient from './AddIngredient.jsx';
import Recipes from './Recipes.jsx';
import RecipeInfo from './RecipeInfo.jsx';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';
import { GlobalStyle } from '../../dist/stylesheets';


/*========== EXPORTS ==========*/
export default function App() {

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

  /*----- RENDERER -----*/
  return (
    <>
      <GlobalStyle />
        <Header>
          <ProfilePlaceholder>P</ProfilePlaceholder>
        </Header>
        <Outlet />
        <NavBar> <Link to={'/'}>Home</Link> <Link to={'Recipes'}>Recipes</Link> <Link to={'AddRecipe'}>Add Recipe</Link> <Link to={'ShoppingList'}>Shopping List</Link> </NavBar>
    </>
  )
}



/*========== STYLES ==========*/
const ProfilePlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  font-size: 14pt;
  border-radius: 99%;
  height: 50px;
  width: 50px;
  background-color: #979797;
`;