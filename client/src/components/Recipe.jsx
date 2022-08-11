/*========== EXTERNAL MODULES ==========*/
import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


/*========== INTERNAL MODULES ==========*/

function Recipe({recipe, selectedRecipes, setSelectedRecipes}) {
  const {recipeName, ingredients, servings, prepTime} = recipe;

  /*----- STATE HOOKS -----*/
  const [checked, setChecked] = useState(false);

  /*----- EVENT HANDLERS -----*/
  const handleCheck = () => {
    const isChecked = checked;
    setChecked(!isChecked);
  }

  const handleSelect = ({target: {name}}) => {
    // const selectedRecipe =
    setSelectedRecipes(prev => ({
      ...prev,
      recipe
    }))
  }

  /*----- RENDERER -----*/
  return (
    <ListItem>
      <Button sx={{color: '#000'}} variant='outlined' name={recipeName} onClick={handleSelect}>
        <Container>
          {/* <Checkbox sx={{transform: 'scale(1.25)'}}type='checkbox' size='large' name='selected' onClick={handleCheck}/> */}
          <RecipeName name='recipeName'>{recipeName}</RecipeName>
          {/* <Ingredients>{ingredients}</Ingredients> */}
          <Servings>Servings: {servings}</Servings>
          <PrepTime>Prep Time: {prepTime}</PrepTime>
        </Container>
      </Button>
    </ListItem>
  )
}


/*========== EXPORTS ==========*/
export default Recipe;


/*========== STYLES ==========*/
const ListItem = styled.div`
  background-color: #d8d8d8;
  margin: 0.5em;
  width: 20em;
  height: 20em;
  padding: 0.5em;
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RecipeName = styled.label`
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
  `;

const Ingredients = styled.label`
  /* position: absolute; */
  right: 8em;
  font-size: 12pt;
`;
const Servings = styled.label`
  /* position: absolute; */
  right: 8em;
  font-size: 12pt;
`;
const PrepTime = styled.label`
  /* position: absolute; */
  right: 8em;
  font-size: 12pt;
`;