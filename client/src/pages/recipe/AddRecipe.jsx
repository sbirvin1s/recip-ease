/*========== EXTERNAL MODULES ==========*/
import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


/*========== INTERNAL MODULES ==========*/
import { addRecipe } from '../../contexts/RecipeContext.js';
import RecipePreview from '../../components/RecipePreview.jsx';
import AddIngredient from '../ingredient/AddIngredient.jsx';
import SearchBar from '../../components/SearchBar.jsx';


/* TODO: Implement Add Recipe feature
  - [ ] Should be able to add a new Recipe if recipe is not found
  - [ ] When entering recipe, should access Search Ingredient functionality to add the selected ingredients to the recipe
  - [ ] Requires:
      - [ ] Recipe Name
      - [ ] Recipe Total Servings
      - [ ] Recipe Prep Time in minutes
      - [ ] Recipe Total Calories
      - [ ] Recipe Picture (optional)
  - [ ] Should be able to edit Recipe if needed
*/

/* NOTE: Shape of recipe object should be:
  {
    recipe_name: ,
    recipe_img: <takes URL>,
    servings: 4,
    prep_time: 30,
    instructions: 'list of instructions' <- might make this an array of instructions to make listing out easier,
    calories: 1600 <- should be the total calories for all servings, calculated from ingredient list
    total_fat: <number>,    <- should be the total for the whole recipe
    sat_fat: <number>,      <- should be the total for the whole recipe
    trans_fat: <number>,    <- should be the total for the whole recipe
    poly_fat: <number>,     <- should be the total for the whole recipe
    mono_fat: <number>,     <- should be the total for the whole recipe
    cholesterol: <number>,  <- should be the total for the whole recipe
    sodium: <number>,       <- should be the total for the whole recipe
    total_carbs: <number>,  <- should be the total for the whole recipe
    fiber: <number>,        <- should be the total for the whole recipe
    sugar: <number>,        <- should be the total for the whole recipe
    protein: <number>,      <- should be the total for the whole recipe
    vitamin_d: <number>,    <- should be the total for the whole recipe
    calcium: <number>,      <- should be the total for the whole recipe
    iron: <number>,         <- should be the total for the whole recipe
    potassium: <number>,    <- should be the total for the whole recipe
  }
*/

/* NOTE: Shape of ingredient list should be an array of objects where each object is the information for that ingredient
  - [ ] should be retrieved from database
  - [ ] should append 'ingredient_amount' to the ingredient object where ingredient amount is the amount of the ingredient required for the recipe
  - [ ] should handle different units (gram, pound, oz, etc.) and convert to gram or mg for saving to database
  - [ ] ingredient list should be submitted after the recipe is stored on the database and the recipe ID is returned
*/


/*========== EXPORTS ==========*/
export default function AddRecipe({showForm, setShowForm, setRecipes}) {

  const firstRef = useRef(null);
  const lastRef = useRef(null);

  /*----- STATE HOOKS -----*/
  const { addNewRecipe, addIngredient } = addRecipe();
  const [ingredient, setIngredient] = useState({});
  const [recipe, setRecipe] = useState({recipeName: '', servings: 0, ingredients: []});
  const [visible, setVisible] = useState('hidden');

  /*----- LIFESTYLE METHODS -----*/
  // TODO: refactor to add new recipe to main recipe tracker state on submission instead of local storage
  // useEffect(() => setRecipes(prev => ({
  //   ...prev,
  //   recipe
  // })), [recipe]);

  /*----- EVENT HANDLERS -----*/
  const handleIngredient = ({target: {name, value, valueAsNumber}}) => {
    if (name === 'quantity') {
      setIngredient(prev => ({
      ...prev,
      [name]: valueAsNumber
      }))
    } else {
      setIngredient(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleRecipe = ({target: {name, value, valueAsNumber}}) => {
    if (name === 'recipeName') {
      setRecipe(prev => ({
      ...prev,
      [name]: value
      }))
    } else {
      setRecipe(prev => ({
        ...prev,
        [name]: valueAsNumber
      }))
    }
  }

  const handleSubmit = () => {
    event.preventDefault();
    localStorage.setItem(recipe.recipeName, JSON.stringify(recipe));
    setRecipes(prev => ([
      ...prev,
      recipe
    ]))
    axios.post('/recipes', recipe)
    .then(res => {
      console.log(res.data)
      setShowForm(false);
    })
    .catch(err => console.error(err));
  }

  const handleAddIngredient = event => {
    event.preventDefault();
    setRecipe(prev => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        ingredient
      ]
    }))
    firstRef.current.value = '';
    lastRef.current.value = '';
    // setVisible('visible');
    // setTimeout(() => setVisible('hidden'), 500);
    setIngredient(undefined);
  }

  /*----- RENDER METHODS -----*/
  const renderEnterIngredient = () => {
    return (
      <form>
        <label>
          <Row>
            Ingredient Name:
            <Input
              style={{width: '8em'}}
              ref={firstRef}
              type='text'
              name='name'
              placeholder='cheese'
              onChange={handleIngredient}
            />
            Quantity:
            <Input
            ref={lastRef}
              type='number'
              name='quantity'
              placeholder='0'
              onChange={handleIngredient}
            />
            <p>{(ingredient && ingredient.units) || ''}</p>
          </Row>
            <ButtonGroup>
              <button value='tsp' name='units' onClick={handleIngredient}>tsp</button>
              <button value='Tbsp'name='units' onClick={handleIngredient}>Tbsp</button>
              <button value='oz' name='units' onClick={handleIngredient}>ounces</button>
              <button value='lbs' name='units' onClick={handleIngredient}>lbs</button>
              <button value='c' name='units' onClick={handleIngredient}>cup</button>
              <button value='g' name='units' onClick={handleIngredient}>gram(s)</button>
              <button value='ml' name='units' onClick={handleIngredient}>ml</button>
              <button value='pinch' name='units' onClick={handleIngredient}>pinch</button>
              <button value='slice(s)' name='units' onClick={handleIngredient}>slice(s)</button>
              <button value='cloves' name='units' onClick={handleIngredient}>clove(s)</button>
              <button value='count' name='units' onClick={handleIngredient}>count</button>
              <button value='' name='units' onClick={handleIngredient}>clear</button>
            </ButtonGroup>
        </label>
        <button onClick={handleAddIngredient} variant='contained' >Add Ingredient</button>
      </form>
    )
  }

  const renderIngredientAlert = visible => {
    return (
      <Alert
        sx={{visibility: {visible}, width: '80%'}}
        variant="filled"
        severity="success">
          Ingredient Added
      </Alert>
    )
  }

  const renderSubmit = () => {
    return (
      <button onClick={handleSubmit}>Submit</button>
      )
  }

  const renderSearchIngredient = () => {
    return (
      <>
      </>
    )
  }

    /*----- RENDERER -----*/
    return (
      <>
        {/* <Route path='AddIngredient' element={<AddIngredient />} /> */}
        <h1>Add Recipe View</h1>
        <h3>Recipe Info Tracker</h3>
        <h3>Ingredient List</h3>
        <h3>Add Ingredient CTA</h3>
        <Link to={'../AddIngredient'}>Add Ingredient</Link>
        <SearchBar name='searchRecipes' placeholder='Search . . .'/>
      </>
    )
  }


/*========== STYLES ==========*/