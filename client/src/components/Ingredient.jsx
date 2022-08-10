/*========== EXTERNAL MODULES ==========*/
import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
// or
// import { Checkbox } from '@mui/material';

/*========== INTERNAL MODULES ==========*/

function Ingredient({ingredient: {name,quantity, units}, servings}) {

  /*----- STATE HOOKS -----*/
  const [checked, setChecked] = useState(false);


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/
  const handleCheck = () => {
    const isChecked = checked;
    setChecked(!isChecked);
  }

  /*----- RENDER METHODS -----*/
  const renderSelected = () => <label name='selected'><Checkbox type='checkbox' onClick={handleCheck}/></label>
  const renderName = () => <label name='ingredientName'><IngredientName>{name}</IngredientName></label>
  const renderQuantity = () => <label name='ingredientQuantity'><Quantity>Quantity: {quantity * servings} {units}</Quantity></label>

  /*----- RENDERER -----*/
  return (
    <ListItem>
      {renderSelected()}
      {renderName()}
      {renderQuantity()}
    </ListItem>
  )
}


/*========== EXPORTS ==========*/
export default Ingredient;


/*========== STYLES ==========*/
const ListItem = styled.div`
  background-color: #d8d8d8;
  /* background-color: #88BB88; */
  margin: 0.5em;
  width: 80vw;
  padding: 0 0.5em;
  display: flex;
  /* border: solid;
  border-width: thin; */
  border-radius: 5px;
  flex-direction: row;
  /* justify-content: space-evenly; */
  align-items: center;
`;

const IngredientName = styled.p`
  margin: 0 20px;
  font-size: 18pt;
  font-weight: bold;
`;

const Quantity = styled.p`
  font-size: 12pt;
`;