/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Row, Page, Label, Input } from '../../dist/stylesheets';
import Button from '../components/Button.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ListItem from '../components/ListItem.jsx';
import Modal from '../components/Modal.jsx';


/*========== EXPORTS ==========*/

/* TODO: Create a page/view that allows the end user to search the current database for a specific ingredient and add a new ingredient if it is not in the database

  - [x] Should be able to search current database by ingredient
  - [] Should support searching by:
    - [x] Ingredient Name
    - [] Ingredient Brand
    - [] Ingredient Barcode / UPC
    - [] Ingredient Category
  - [] Should be able to add new ingredient to database if not already present
  - [] Supports scanning of nutrition label to auto fill nutrition information
  - [] Should request the end user scan the ingredients barcode during adding process
  - [] Should provide list of food categories for ingredient to be added into
*/

export default function AddIngredient({ children, ...props }) {

/*----- STATE HOOKS -----*/
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredients, setIngredients] = useState();
  const [filteredIngredients, setFilteredIngredients] = useState();
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filterFoodCategories, setFilterFoodCategories] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);


/*----- LIFECYCLE METHODS -----*/
  useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      axios.get('ingredient/'+ searchTerm)
      .then(ingredientSearch => {
        setIngredients(ingredientSearch.data)
        setFilteredIngredients(ingredientSearch.data)
      })
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

const handleScan = () => {

  setSelectedIngredients(prev => ([
    ...prev, ingredient
  ]));
}

const handleFilterFoodCategories = () => {

}

const handleFilterBrands = ({ target: {value} }) => {
  const filteredByBrand = ingredients.filter(ingredient => ingredient.brand === value);
  setFilteredIngredients(filteredByBrand);
}

/*----- RENDER METHODS -----*/

const renderFilterOptions = () => {
  const brandFilter = {}

  if (ingredients && ingredients.length > 0) {
    ingredients.map(ingredient => {
      brandFilter[ingredient.brand] = ingredient.brand;
    })

    return Object.keys(brandFilter).map((brand, index) => {
      return (
        <option
          key={'brand' + index}
          id={brand + 'Filter'}
          value={brand}
        >
          {brand}
        </option>
      )
    })
  }
}

const renderFilters = () => {
  if (searchTerm && searchTerm.length > 0) {
    return (
      <>
        <p>Filter By:</p>
        <Label htmlFor='filterBrands'>
          Brand:
          <select
            id='filterBrands'
            name='Brand'
            onChange={handleFilterBrands}
          >
            <option></option>
            {renderFilterOptions()}
          </select>
          <Button
            id='filterBrandsButton'
            onClick={() => setFilteredIngredients(ingredients)}
          >
            Clear
          </Button>
        </Label>
        <Button onClick={handleFilterFoodCategories}>Category</Button>
      </>
    )
  } else {
    return <></>
  }
}

const renderIngredients = () => {
  if (filteredIngredients && filteredIngredients.length > 0) {
    return filteredIngredients.map((ingredient, index) => {
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
  } else if (filteredIngredients && filteredIngredients.length === 0) {
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
      <SearchBar placeholder='Search . . .' searchState={setSearchTerm} type='text'>
        <Button onClick={handleScan}>[||||]</Button>
      </SearchBar>
      {renderFilters()}
      {renderSelected()}
      <Row>
        <Button onClick={() => setShowModal(true)}>Add Ingredient</Button>
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
        <h1>Add Ingredients</h1>
        <Button onClick={handleScan}>Scan</Button>
      </Modal>
    </>
  )
}




/*========== STYLES ==========*/
