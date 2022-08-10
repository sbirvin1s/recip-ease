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


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderSelected = () => <label name='selected'><Checkbox type='checkbox'/></label>
  const renderName = () => <label name='ingredientName'><h3>{name} </h3></label>
  const renderQuantity = () => <label name='ingredientQuantity'><p>Quantity: {quantity * servings}</p></label>
  const renderUnits = () => <label name='ingredientUnits'><p>{units}</p></label>

  /*----- RENDERER -----*/
  return (
    <ListItem>
      {renderSelected()}
      {renderName()}
      {renderQuantity()}
      {renderUnits()}
    </ListItem>
  )
}


/*========== EXPORTS ==========*/
export default Ingredient;


/*========== STYLES ==========*/
const ListItem = styled.div`
  margin: 1em;
  width: 80;
  padding: 0 0.5em;
  display: flex;
  border: solid;
  border-width: thin;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;