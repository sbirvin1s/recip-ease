/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

/*========== INTERNAL MODULES ==========*/

function RecipePreview({ingredients, recipe, setRecipe}) {

  /*----- EVENT HANDLER -----*/
  const handleRemoveIngredient = ({target:{name}}) => {
    event.preventDefault();
    const currentIngredients = recipe.ingredients;
    currentIngredients.splice(currentIngredients.name, 1)
    setRecipe(prev => ({
      ...prev,
      ingredients: currentIngredients
    }))
  }

  /*----- RENDER METHODS -----*/
  const renderRecipe = () => {
    if (ingredients) {
      return ingredients.map(({name, quantity, units}, index) => {
        return (
          <ListItem key={name + index}>
            <IngredientName
              name='ingredientName'
                >{name}
            </IngredientName>
            <Quantity
              name='ingredientQuantity'
                >Quantity: {quantity} {units}
            </Quantity>
            <IconContainer>
              <IconButton
                sx={{color: '#e57373'}}
                name={name}
                aria-label="delete"
                // size="small"
                onClick={handleRemoveIngredient}>
                  <DeleteIcon fontSize="inherit" />
              </IconButton>
            </IconContainer>
          </ListItem>
        )
      })
    }
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
  position: relative;
  background-color: #d8d8d8;
  margin: 0.25em 0.25em;
  height: 1.5em;
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

const IconContainer = styled.div`
  position: absolute;
  right: 0.25em;
`;

const IngredientName = styled.label`
  position: absolute;
  left: 0;
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
  `;

const Quantity = styled.label`
  position: absolute;
  right: 3em;
  font-size: 12pt;
`;