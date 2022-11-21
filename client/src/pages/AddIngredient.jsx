/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Feed, Row, Page, Label, Column } from '../../dist/stylesheets';
import Input from '../components/Input.jsx';
import Button from '../components/Button.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ListItem from '../components/ListItem.jsx';
import Modal from '../components/Modal.jsx';


/*========== EXPORTS ==========*/

/* TODO: Create a page/view that allows the end user to search the current database for a specific ingredient and add a new ingredient if it is not in the database

  - [x] Should be able to search current database by ingredient
  - [] Should support searching by:
    - [x] Ingredient Name
    - [x] Ingredient Brand
    - [] Ingredient Barcode / UPC
    - [x] Ingredient Category
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
  const [newIngredient, setNewIngredient] = useState();
  const [showModal, setShowModal] = useState(false);

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
    window.alert('Placeholder: Launches Camera View');
    // setSelectedIngredients(prev => ([
    //   ...prev, ingredient
    // ]));
  }

  const handleFilterFoodCategories = ({ target: {value} }) => {
    const filteredByCategories = ingredients.filter(ingredient => ingredient.food_category === value);
    setFilteredIngredients(filteredByCategories);
  }

  const handleFilterBrands = ({ target: {value} }) => {
    const filteredByBrand = ingredients.filter(ingredient => ingredient.brand === value);
    setFilteredIngredients(filteredByBrand);
  }

  const updateNewIngredient = ({ target: {name, value} }) => {
    setNewIngredient(prev => ({
      ...prev,
      [name]: value
    }))
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

  const renderFilterCategoriesOptions = () => {
    const categoryFilter = {}

    if (ingredients && ingredients.length > 0) {
      ingredients.map(ingredient => {
        categoryFilter[ingredient.food_category] = ingredient.food_category;
      })

      return Object.keys(categoryFilter).map((category, index) => {
        return (
          <option
            key={'category' + index}
            id={category + 'Filter'}
            value={category}
          >
            {category}
          </option>
        )
      })
    }
  }

  const renderFilters = () => {
    const brandRef = useRef();
    const categoryRef = useRef();

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
              defaultValue=''
              ref={brandRef}
            >
              <option></option>
              {renderFilterOptions()}
            </select>
          </Label>
          <Label htmlFor='filterCategories'>
            Food Category:
            <select
              id='filterCategories'
              name='Category'
              onChange={handleFilterFoodCategories}
              defaultValue=''
              ref={categoryRef}
            >
              <option></option>
              {renderFilterCategoriesOptions()}
            </select>
          </Label>
          <Button
            id='filterClearButton'
            onClick={() => {
              brandRef.current.value = null;
              categoryRef.current.value = null;
              setFilteredIngredients(ingredients);
            }}
          >
            Clear
          </Button>
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
            <p>{ingredient.brand}</p>
            <p>{ingredient.food_category}</p>
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
            <p>{ingredient.brand}</p>
            <p>{ingredient.food_category}</p>
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
      <Row>
        <SearchBar
          placeholder='Search . . .'
          searchState={setSearchTerm}
          type='text'
          style={{
            width:'80%',
          }}
        >
        </SearchBar>
        <Button onClick={handleScan}>[||||]</Button>
      </Row>
      {renderFilters()}
      {renderSelected()}
      <Page
        style={{
          position: 'absolute',
          bottom: '40px',
          maxHeight:'60vh',
          minHeight:'40vh',
          overflow: 'scroll',
        }}
      >
        {renderIngredients()}
      </Page>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Row>
          <h1>Add Ingredients</h1>
          <Button onClick={handleScan}>Scan</Button>
        </Row>
        <Column>
            <Input onChange={updateNewIngredient} placeholder='Corn' labelName={'Ingredient Name'} name={'ingredientName'}/>
            <Input onChange={updateNewIngredient} placeholder='Green Giant' labelName={'Brand'} name={'brand'}/>
            <Input onChange={updateNewIngredient} placeholder='000000000000' labelName={'barcode'} name={'barcode'}/>
            <Label htmlFor='foodCategory'>
              Category:
                <select
                  id='foodCategory'
                  name='foodCategory'
                  onChange={updateNewIngredient}
                  defaultValue='-- select a category --'
                >
                  <option value={null}>-- select a category --</option>
                  <option value={'Canned Goods'}>Canned Goods</option>
                  <option value={'Vegetables'}>Vegetables</option>
                  <option value={'Fruits'}>Fruits</option>
                  <option value={'Sliced Meats'}>Sliced Meats</option>
                  <option value={'Dairy'}>Dairy</option>
                  <option value={'Poultry'}>Poultry</option>
                  <option value={'Red Meat'}>Red Meat</option>
                </select>
            </Label>
            <Row>
              <Input onChange={updateNewIngredient} placeholder='91' labelName={'Serving Size'} name={'servingSize'}/>
              <Label htmlFor='servingUnit'>
              unit:
                <select
                  id='servingUnit'
                  name='servingUnit'
                  onChange={updateNewIngredient}
                  defaultValue='--'
                >
                  <option value={null}>--</option>
                  <option value={'g'}>g</option>
                  <option value={'oz'}>oz</option>
                  <option value={'floz'}>fl. oz</option>
                  <option value={'cups'}>cups</option>
                  <option value={'lbs'}>lbs</option>
                </select>
            </Label>
            </Row>
            <Input onChange={updateNewIngredient} placeholder='5' labelName={'Serving Per Container'} name={'servingPerContainer'}/>
            <Input onChange={updateNewIngredient} placeholder='120' labelName={'Calories'} name={'calories'}/>
            <Input onChange={updateNewIngredient} placeholder='1.5' labelName={'Total Fat'} name={'totalFat'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Saturated Fat'} name={'satFat'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Trans Fat'} name={'transFat'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Poly Unsaturated Fat'} name={'polyUnSatFat'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Mono Unsaturated Fat'} name={'monoUnSatFat'}/>
            <Input onChange={updateNewIngredient} placeholder='10' labelName={'Cholesterol'} name={'cholesterol'}/>
            <Input onChange={updateNewIngredient} placeholder='105' labelName={'Sodium'} name={'sodium'}/>
            <Input onChange={updateNewIngredient} placeholder='27' labelName={'Total Carbs'} name={'totalCarbs'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Dietary Fiber'} name={'fiber'}/>
            <Input onChange={updateNewIngredient} placeholder='20' labelName={'Sugar'} name={'sugar'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Protein'} name={'protein'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Vitamin A'} name={'vitaminA'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Vitamin C'} name={'vitaminC'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Vitamin D'} name={'vitaminD'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Calcium'} name={'calcium'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Iron'} name={'iron'}/>
            <Input onChange={updateNewIngredient} placeholder='0' labelName={'Potassium'} name={'potassium'}/>
        </Column>
        <Row>
          <Button>Submit</Button>
          <Button>ADD</Button>
        </Row>
      </Modal>
      <Button
        onClick={() => setShowModal(true)}
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '40px',
        }}
      >
        Add Ingredient
      </Button>
    </>
  )
}




/*========== STYLES ==========*/
