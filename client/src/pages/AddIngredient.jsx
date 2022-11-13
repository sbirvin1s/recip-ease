/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Row, Page } from '../../dist/stylesheets';
import Button from '../components/Button.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ListItem from '../components/ListItem.jsx';
import Modal from '../components/Modal.jsx';


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
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);


/*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      axios.get('ingredient/'+ searchTerm)
      .then(ingredientSearch => setIngredients(ingredientSearch.data))
      .catch(err => console.error(err))
    }
  }, [searchTerm])

/*----- EVENT HANDLERS -----*/
const handleSelect = ingredient => {
  setSelectedIngredients(prev => ([
    ...prev, ingredient
  ]));
}

const handleRemove = ingredient => {
  const currentIngredients = [...selectedIngredients];
  currentIngredients.splice(ingredient, 1);
  setSelectedIngredients(currentIngredients);
}

/*----- RENDER METHODS -----*/

const renderFilters = () => {
  if (searchTerm && searchTerm.length > 0) {
    return (
      <>
        <p>Filter By:</p>
        <Button>Brand</Button>
        <Button>Category</Button>
        <Button>Serving</Button>
      </>
    )
  } else {
    return <></>
  }
}

const renderIngredients = () => {
  if (ingredients && ingredients.length > 0) {
    return ingredients.map((ingredient, index) => {
      return (
        <ListItem
          key={'ingredient' + index}
          id={'ingredient' + index}
          ingredient={ingredient}
          enableButton={true}
          buttonValue={'ADD'}
          buttonClick={() => handleSelect(ingredient)}
        >
          <p>{ingredient.ingredient}</p>
          <p>{ingredient.brand} {ingredient.food_category}</p>
        </ListItem>
      )
    })
  } else if (ingredients && ingredients.length === 0) {
    return <h4>No Ingredients that matched your search could be found</h4>
  } else {
    return <></>
  }
}

const renderSelected = () => {
  if (selectedIngredients && selectedIngredients.length) {
    return selectedIngredients.map((ingredient, index) => {
      return (
        <ListItem
          key={'selectedIngredient' + index}
          id={'selectedIngredient' + index}
          ingredient={ingredient}
          enableButton={true}
          buttonValue={'X'}
          buttonClick={() => handleRemove(ingredient)}
        >
          <p>{ingredient.ingredient}</p>
          <p>{ingredient.brand} {ingredient.food_category}</p>
        </ListItem>
      )
    })
  } else {
    return <></>
  }
}

/*----- RENDERER -----*/
  return (
    <>
      <SearchBar placeholder='Search . . .' searchState={setSearchTerm} type='text'/>
      {renderFilters()}
      {renderSelected()}
      <Row>
        <Button>Add Ingredient</Button>
      </Row>
      <Page style={{
        postition: 'absolute',
        bottom: '800px',
        maxHeight:'80vh',
        minHeight:'50vh',
        overflow: 'scroll',
      }}>
        {renderIngredients()}
      </Page>
      <Modal showModal={showModal} setShowModal={setShowModal}>

      </Modal>
      <Modal showModal={showModal} setShowModal={setShowModal}>

      </Modal>
    </>
  )
}




/*========== STYLES ==========*/
