/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../../dist/stylesheets';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState();

/*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      axios.get('ingredient/'+ searchTerm)
      .then(ingredientSearch => setIngredients(ingredientSearch.data))
      .catch(err => console.error(err))
    }
  }, [searchTerm])

/*----- EVENT HANDLERS -----*/

/*----- RENDER METHODS -----*/

/*----- RENDERER -----*/
  return (
    <>
      <h1>Add and Search Ingredients</h1>
      <SearchBar placeholder='Search . . .' searchState={setSearchTerm} type='text'/>
      <Row>
        <h3>Scan Ingredient</h3>
        <h3>Enter Ingredient</h3>
      </Row>
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
