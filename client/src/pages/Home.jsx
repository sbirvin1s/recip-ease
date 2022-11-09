/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Page, Column, Row } from '../../dist/stylesheets';
import ShoppingList from './ShoppingList.jsx';
import AddRecipe from './AddRecipe.jsx';
import Recipes from './Recipes.jsx';
import DiaryItem from '../components/DiaryItem.jsx';



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

  const renderDiary = () => {
    return (
      <Diary>
        <DiaryItem meal={'Breakfast Card'}/>
        <DiaryItem meal={'Lunch Card'}/>
        <DiaryItem meal={'Dinner Card'}/>
        <DiaryItem meal={'Snack Card'}/>
      </Diary>
    )
  }

  const renderDateSelector = () => {
    return (
      <>
        <Row>
          <button>prev</button> November, 11 2022 <button>next</button>
        </Row>
      </>
    )
  }

  const renderDailyMetrics = () => {
    return (
      <>
        <Background>
          <h1>Home Page</h1>
          <div>Carbs Graph</div>
          <div>Protein Graph</div>
          <div>Lipds Graph</div>
          <div>Daily Calorie Graph</div>
        </Background>
      </>
    )
  }


  /*----- RENDERER -----*/
  return (
    <>
      <Page>
        {renderDailyMetrics()}
        {renderDateSelector()}
        {renderDiary()}
      </Page>
    </>
  )
}


/*========== STYLES ==========*/

const Background = styled(Column)`
  height: 40vh;
  width: 150vw;
  margin-top: 0.25rem;
  background: linear-gradient(38.52deg, rgba(74, 159, 72, 0.555) 15.44%, rgba(26, 206, 152, 0.57) 43.67%);
  border-radius: 0 0 50% 50%;
`;

const Diary = styled(Column)`
  height: 50vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;