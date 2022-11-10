/*========== EXTERNAL MODULES ==========*/
import React, { useState } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Input } from '../../dist/stylesheets';
import SearchBar from '../components/SearchBar.jsx';


/*========== EXPORTS ==========*/

/* TODO: Create a page/view that allows the end user to search the current database for a specific ingredient and add a new ingredient if it is not in the database

  * Should be able to search current database by ingredient
  * should support searching by:
  * Ingredient Name
  * Ingredient Brand
  * Ingredient Barcode / UPC
  * Ingredient Category
  * Should be able to add new ingredient to database if not already present
  * Supports scanning of nutrition label to auto fill nutrition information
  * Should request the end user scan the ingredients barcode during adding process
  * Should provide list of food categories for ingredient to be added into
*/

export default function AddIngredient({ children, ...props }) {

  /*----- STATE HOOKS -----*/
  const [searchTerm, setSearchTerm] = useState();

  /*----- LIFECYCLE METHODS -----*/

  /*----- EVENT HANDLERS -----*/
  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm()
  }

  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <>
      <h1>Add and Search Ingredients</h1>
      <SearchBar placeholder='Search . . .' searchState={setSearchTerm} type='text'/>
      <h3>Scan Ingredient</h3>
      <h3>Enter Ingredient</h3>
      <ol>Search Results
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
        <li>Ingredient    [ADD]</li>
      </ol>
    </>
  )
}




/*========== STYLES ==========*/
