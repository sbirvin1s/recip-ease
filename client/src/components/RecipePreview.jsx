/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

function RecipePreview({ingredients}) {

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderRecipe = () => {
    return ingredients.map(({name, quantity, units}, index) => {
      return (
        <ListItem key={name + index}>
          <label name='ingredientName'><IngredientName>{name}</IngredientName></label>
          <label name='ingredientQuantity'><Quantity>Quantity: {quantity} {units}</Quantity></label>
        </ListItem>
      )
    })
  }

  /*----- RENDERER -----*/
  return (
    <>
      <h3>Current Ingredients</h3>
      <List>
        {renderRecipe()}
      </List>
    </>
  )
}


/*========== EXPORTS ==========*/
export default RecipePreview;



/*========== STYLES ==========*/
const ListItem = styled.div`
  background-color: #d8d8d8;
  /* background-color: #88BB88; */
  margin: 0.5em;
  width: 80;
  padding: 0.5em;
  display: flex;
  /* border: solid;
  border-width: thin; */
  border-radius: 5px;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  min-height: 25%;
  background-color:  rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  flex-direction: column;
  align-items: flex-start;
`;

const IngredientName = styled.p`
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
`;

const Quantity = styled.p`
  font-size: 12pt;
`;