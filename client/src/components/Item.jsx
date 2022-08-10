/*========== EXTERNAL MODULES ==========*/
import React, {useState} from 'react';

/*========== INTERNAL MODULES ==========*/

function Item() {

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
      {renderName()}
      {renderQuantity()}
      {renderUnits()}
    </div>
  )
}


/*========== EXPORTS ==========*/
export default Item;