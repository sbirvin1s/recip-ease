/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';


/*========== INTERNAL MODULES ==========*/
import Item from './Item.jsx';


function ShoppingList() {

  /*----- STATE HOOKS -----*/
  const [list, setList] = useState([]);


  /*----- LIFESTYLE METHODS -----*/
  // TODO: create a useEffect that pulls local storage data into state
  // TODO: create a useEffect that pushes new state into local storage
  // useEffect(() => , []);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/
  const renderList = () => {
    // TODO: map information and push info into each Item
  }


  /*----- RENDERER -----*/
  return (
    // TODO: figure out a way to iterate over all list objects and add similiar ingredients together instead of making a new ingredient line
    <>
      <h3>This is where the shopping list goes</h3>
      {/* {renderList()} */}
    </>
  )
}


/*========== EXPORTS ==========*/
export default ShoppingList;