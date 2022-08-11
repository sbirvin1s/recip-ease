/*========== EXTERNAL MODULES ==========*/
import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios';


/*========== INTERNAL MODULES ==========*/
import RecipeList from './RecipeList.jsx';


function SearchRecipes({showSearchForm, setShowSearchForm, setRecipes}) {
  if (!showSearchForm) {
    return null;
  }

  /*----- STATE HOOKS -----*/
  const [recordedRecipes, setRecordedRecipes] = useState();
  const [selectedRecipes, setSelectedRecipes] = useState();

  /*----- LIFESTYLE METHODS -----*/
  useEffect(() => {
    axios.get('/recipes')
    .then(recipes => setRecordedRecipes(recipes.data))
    // .then(recipes => {
    //   const newRecipes = recipes.data;
    //   setRecordedRecipes(prevRecipes => ({
    //   ...prevRecipes,
    //   newRecipes
    //   }))
    // })
    .catch(err => console.error(err))
  }, [])


  /*----- EVENT HANDLERS -----*/
  const handleSubmit = () => {
    event.preventDefault();
    const currentRecipe = selectedRecipes.recipe;
    localStorage.setItem(currentRecipe.recipeName, JSON.stringify(currentRecipe));
    setRecipes(prev => ([
      ...prev,
      currentRecipe
    ]))
    setShowSearchForm(false);
  }


  /*----- RENDER METHODS -----*/
  const renderSubmit = () => {
    return (
      <Button onClick={handleSubmit}>Submit</Button>
      )
    }

    /*----- RENDERER -----*/
    return ReactDOM.createPortal (
      <Background onClick={() => setShowSearchForm(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <h1>Select a Recipe</h1>
        <Column>
          <RecipeList recipes={recordedRecipes} selectedRecipes={selectedRecipes} setSelectedRecipes={setSelectedRecipes}/>
        </Column>
        <ButtonContainer>{renderSubmit()}</ButtonContainer>
      </Container>
    </Background>,
    document.getElementById('portal')
    )
  }


  /*========== EXPORTS ==========*/
  export default SearchRecipes;


  /*========== STYLES ==========*/
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  `;

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3em;
    background-color: #d8d8d8;
    /* background-color: #414141; */
    width: 60vw;
    min-height: 60vh;
    box-sizing: border-box;
    `;

const ButtonContainer = styled.div`
  margin: 1em;
`;

const Row = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const ButtonGroup = styled.div`
  display:flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Input = styled.input`
  border: solid;
  border-width: thin;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 12pt;
  font-weight: light;
  background-color: transparent;
  width: 3em;
  padding: 2px;
  margin: 10px;
  text-align: center;
  `;