/*========== EXTERNAL MODULES ==========*/
import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


/*========== INTERNAL MODULES ==========*/
import RecipePreview from './RecipePreview.jsx';


function Form({showForm, setShowForm}) {
  if (!showForm) {
    return null;
  }

  /*----- STATE HOOKS -----*/
  const [ingredient, setIngredient] = useState();
  const [recipe, setRecipe] = useState({recipeName: '', servings: 0, ingredients: []});

  /*----- LIFESTYLE METHODS -----*/
  // TODO: refactor to add new recipe to main recipe tracker state on submission instead of local storage
  // useEffect(() => setRecipes(prev => ({
  //   ...prev,
  //   recipe
  // })), [recipe]);

  /*----- EVENT HANDLERS -----*/
  const handleIngredient = ({target: {name, value}}) => {
    setIngredient(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRecipe = ({target: {name, value}}) => {
    setRecipe(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = () => {
    event.preventDefault();
    localStorage.setItem(recipe.recipeName, JSON.stringify(recipe));
  }

  const handleAddIngredient = () => {
    event.preventDefault();
    setRecipe(prev => ({
      ...prev,
      ingredients: [
        ...prev.ingredients,
        ingredient
      ]
    }))
    setIngredient(undefined);
  }

  /*----- RENDER METHODS -----*/
  const renderEnterIngredient = () => {
    return (
      <>
        <label>Ingredient Name <input type='text' name='name' placeholder='cheese' onChange={handleIngredient}/></label>
        <label>Quantity <input type='number' name='quantity' placeholder='0' onChange={handleIngredient}/></label>
        <label>Units
          <input list='units' name='units' onChange={handleIngredient}/>
          <datalist id='units' >
            <option value='tsp'/>
            <option value='Tbsp'/>
            <option value='oz'/>
            <option value='lb'/>
            <option value='c'/>
            <option value='g'/>
            <option value='ml'/>
            <option value='pinch'/>
            <option value='slice(s)'/>
            <option value='cloves'/>
            <option value='count'/>
          </datalist>
        </label>
        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </>
    )
  }

  const renderSubmit = () => {
    return (
      <button onClick={handleSubmit}>Submit</button>
      )
    }

    /*----- RENDERER -----*/
    return ReactDOM.createPortal (
      <Background onClick={() => setShowForm(false)}>
      <FormStyle onClick={(event) => event.stopPropagation()}>
        <h2>Enter your Recipe</h2>
        <label>Number of Servings <input type='number' name='servings' placeholder='1' onChange={handleRecipe}/></label>
        <label>Recipe Name <input type='text' name='recipeName' placeholder='Grilled Cheese' onChange={handleRecipe}/></label>
        <label>Prep Time <input type='number' name='prepTime' placeholder='30' step='1' onChange={handleRecipe}/><p>minutes</p></label>
        <RecipePreview ingredients={recipe.ingredients}/>
        <h4>Add an Ingredient</h4>
        {renderEnterIngredient()}
        {renderSubmit()}
      </FormStyle>
    </Background>,
    document.getElementById('portal')
  )
}


/*========== EXPORTS ==========*/
export default Form;


/*========== STYLES ==========*/
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const FormStyle = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 70px 0;
  background-color: #d8d8d8;
  width: 60vw;
  height: 80vh;
  box-sizing: border-box;
`;