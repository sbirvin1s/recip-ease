/*========== EXTERNAL MODULES ==========*/
import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


/*========== INTERNAL MODULES ==========*/
import RecipePreview from '../../components/RecipePreview.jsx';
import AddIngredient from '../ingredient/AddIngredient.jsx';
import SearchBar from '../../components/SearchBar.jsx';


/* TODO: Implement Add Recipe feature
  * Should be able to add a new Recipe if recipe is not found
  * When entering recipe, should access Search Ingredient functionality to add the selected ingredients to the recipe
  * Requires:
    * Recipe Name
    * Recipe Total Servings
    *  Recipe Prep Time in minutes
    *  Recipe Total Calories
    *  Recipe Picture (optional)
  * Should be able to edit Recipe if needed
*/

/*========== EXPORTS ==========*/
export default function AddRecipe({showForm, setShowForm, setRecipes}) {

  const firstRef = useRef(null);
  const lastRef = useRef(null);

  /*----- STATE HOOKS -----*/
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
    // return ReactDOM.createPortal (
    //   <Background onClick={() => setShowForm(false)}>
    //   <Container onClick={(event) => event.stopPropagation()}>
    //     <Column>
    //       <h1>Enter your Recipe</h1>
    //         <label>
    //           <h3 style={{margin: '0', padding: '0'}}>
    //           Recipe Name
    //           <Input
    //             style={{width: '10em'}}
    //             type='text'
    //             name='recipeName'
    //             placeholder='Grilled Cheese'
    //             onChange={handleRecipe}
    //           />
    //           </h3>
    //         </label>
    //         <Row>
    //           <label>
    //             Number of Servings
    //             <Input
    //               type='number'
    //               name='servings'
    //               placeholder='1'
    //               onChange={handleRecipe}
    //               />
    //           </label>
    //           <label>
    //             <Row>
    //               Prep Time:
    //               <Input
    //                 type='number'
    //                 name='prepTime'
    //                 placeholder='30'
    //                 step='1'
    //                 onChange={handleRecipe}
    //                 />
    //               <p>minutes</p>
    //             </Row>
    //           </label>
    //         </Row>
    //       <RecipePreview ingredients={recipe.ingredients} recipe={recipe} setRecipe={setRecipe}/>
    //       {/* {renderIngredientAlert()} */}
    //       <h4>Add Ingredient</h4>
    //       {renderEnterIngredient()}
    //     </Column>
    //     <ButtonContainer>{renderSubmit()}</ButtonContainer>
    //   </Container>
    // </Background>,
    // document.getElementById('portal')
    // )

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