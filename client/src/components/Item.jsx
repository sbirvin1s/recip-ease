/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';

/*========== INTERNAL MODULES ==========*/

const Item = () =>{

  /*----- STATE HOOKS -----*/


  /*----- LIFESTYLE METHODS -----*/


  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderSelected = () => <label name='selected'><input type='checkbox'></input></label>

  const renderName = () => {

  }

  const renderQuantity = () => {

  }

  const renderUnits = () => {

  }

  /*----- RENDERER -----*/
  return (
    <div>
      {renderSelected()}
      {renderNamer()}
      {renderQuantity()}
      {renderUnits()}
    </div>
  )
}


/*========== EXPORTS ==========*/
export default Item;