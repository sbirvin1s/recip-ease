/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Row, Page, Label, Column } from '../../dist/stylesheets';
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
  - [x] Should be able to add new ingredient to database if not already present
    - [x] Upon submission of the new ingredient form:
      - [x] should submit to database
      - [x] return added item
      - [x] add new item to selected items list
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
  const [showSelectedIngredients, setShowSelectedIngredients] = useState(false);
  const [showIngredientAdded, setShowIngredientAdded] = useState(false);
  const [ingredientCount, setIngredientCount] = useState(0);

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

  useEffect(() => {
    if (selectedIngredients && selectedIngredients.length === 0) {
      setShowSelectedIngredients(false);
    }
  }, [selectedIngredients])

  useEffect(() => {
    if (selectedIngredients.length > ingredientCount) {
      setIngredientCount(prev => prev + 1);
      setShowIngredientAdded(true);
      setTimeout(() => setShowIngredientAdded(false), 2000)
    }

    if (selectedIngredients.length < ingredientCount) {
      setIngredientCount(selectedIngredients.length);
    }
  }, [selectedIngredients])

/*----- EVENT HANDLERS -----*/
  const handleSelect = ingredient => {
    setSelectedIngredients(prev => ([
      ...prev, ingredient
    ]));
  }

  const handleRemove = ingredient => {
    event.preventDefault();
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

  const handleSubmit = () => {
    event.preventDefault();
    setShowModal(false);

    axios.post('/ingredient/new', newIngredient)
    .then(submitResponse => {
      handleSelect(submitResponse.data);
      setNewIngredient({});
    })
    .catch(err => console.error(err))
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
        const {
          brand,
          calories,
          food_category,
          serving_size,
          serving_unit
        } = ingredient;

        let rounded_serving_size = Number.parseFloat(serving_size).toFixed(2);

        if (Number(rounded_serving_size) === Math.floor(rounded_serving_size)) {
          rounded_serving_size = Math.floor(rounded_serving_size);
        }

        return (
          <ListItem
            key={'ingredient' + index}
            id={'ingredient' + index}
            ingredient={ingredient}
            enableButton={true}
            buttonValue={'+'}
            buttonClick={() => handleSelect(ingredient)}
          >
            <IngredientInfo>
              <IngredientName>{ingredient.ingredient}</IngredientName>
              <IngredientSubtext>{brand}</IngredientSubtext>
            </IngredientInfo>
            <IngredientInfo>
              <IngredientSubtext>{'🔥 ' + Math.floor(calories)}</IngredientSubtext>
              <IngredientSubtext>{rounded_serving_size + serving_unit}</IngredientSubtext>
              <IngredientSubtext>{food_category}</IngredientSubtext>
            </IngredientInfo>
          </ListItem>
        )
      })
    } else if (filteredIngredients && filteredIngredients.length === 0) {
      return <h4>No foods matching your search could be found</h4>
    } else {
      return <Column><h4>Search for a food in the database or add a new food to get started!</h4></Column>
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
            <IngredientName>{ingredient.ingredient}</IngredientName>
            <IngredientInfo>
              <IngredientSubtext>{'🔥 ' + Math.floor(ingredient.calories)}</IngredientSubtext>
              <IngredientSubtext>{ingredient.brand}</IngredientSubtext>
              <IngredientSubtext>{ingredient.food_category}</IngredientSubtext>
            </IngredientInfo>
          </ListItem>
        )
      })
    } else {
      return <></>
    }
  }

  const renderRecipeButton = () => {
    if (selectedIngredients && selectedIngredients.length > 0) {
      return (
        <>
          <IngredientCounter>{selectedIngredients.length}</IngredientCounter>
          <Button
          onClick={() => setShowSelectedIngredients(true)}
          style={{
            position: 'fixed',
            right: '140px',
            bottom: '40px',
          }}
        >
          Show Recipe List
        </Button>
        </>
      )
    } else {
      return <></>
    }
  }

  const renderIngredientAdded = () => {
    if (showIngredientAdded) {
      return (
        <Alert>
          <p>Ingredient Added</p>
        </Alert>
      )
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
      <IngredientFeed>
        {renderIngredients()}
      </IngredientFeed>
      {renderIngredientAdded()}
      <Modal role='add ingredients'
        showModal={showModal}
        setShowModal={setShowModal}
      >
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
                  <option value={'TEST'}>TEST</option>
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
          <Button onClick={handleSubmit}>Submit</Button>
        </Row>
      </Modal>
      <Modal role='show selected ingredients'
        showModal={showSelectedIngredients}
        setShowModal={setShowSelectedIngredients}
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
      >
        {renderSelected()}
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
      {renderRecipeButton()}
    </>
  )
}




/*========== STYLES ==========*/
const IngredientName = styled.p`
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

const IngredientInfo = styled(Row)`
  justify-content: space-between;
`;

const IngredientSubtext = styled.p`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
`;

const IngredientFeed = styled(Page)`
  height: 70vh;
  padding-top: 10px;
  overflow: scroll;
`;

const IngredientCounter = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 4;
  height: 20px;
  width: 20px;
  left: 20rem;
  top: 64.5rem;
  border-radius: 50%;
  background-color: red;
`;

const Alert = styled.div`
  position: fixed;
  top: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #8FC645;
  border-radius: 8px;
  z-index: 6;
  height: 50px;
  width: 75%;
`;