/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/

function RecipePreview({ingredients}) {

  /*----- RENDER METHODS -----*/
  const renderRecipe = () => {
    return ingredients.map(({name, quantity, units}, index) => {
      return (
        <ListItem key={name + index}>
          <IngredientName name='ingredientName'>{name}</IngredientName>
          <Quantity name='ingredientQuantity'>Quantity: {quantity} {units}</Quantity>
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
  margin: 0.25em 0.25em;
  width: 90%;
  padding: 0.5em;
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const List = styled.div`
  display: flex;
  width: 100%;
  min-height: 10em;
  padding: 0.25em;
  background-color:  rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
`;

const IngredientName = styled.label`
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
  `;

const Quantity = styled.label`
  font-size: 12pt;
`;