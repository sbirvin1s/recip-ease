/*========== EXTERNAL MODULES ==========*/
import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
// import Checkbox from '@mui/material/Checkbox';


/*========== INTERNAL MODULES ==========*/

function Ingredient({ingredient: {name,quantity, units}, servings}) {

  /*----- STATE HOOKS -----*/
  const [checked, setChecked] = useState(false);


  /*----- EVENT HANDLERS -----*/
  const handleCheck = () => {
    const isChecked = checked;
    setChecked(!isChecked);
  }

  /*----- RENDERER -----*/
  return (
    <ListItem>
      <Container>
        <Checkbox sx={{transform: 'scale(1.25)'}}type='checkbox' size='large' name='selected' onClick={handleCheck}/>
        <IngredientName name='ingredientName'>{name}</IngredientName>
      </Container>
      <Quantity name='ingredientQuantity'>Quantity: {quantity * servings} {units}</Quantity>
    </ListItem>
  )
}


/*========== EXPORTS ==========*/
export default Ingredient;


/*========== STYLES ==========*/
const ListItem = styled.div`
  background-color: #d8d8d8;
  margin: 0.5em;
  width: 80vw;
  padding: 0.5em;
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IngredientName = styled.label`
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
  `;

const Quantity = styled.label`
  position: absolute;
  right: 8em;
  font-size: 12pt;
`;