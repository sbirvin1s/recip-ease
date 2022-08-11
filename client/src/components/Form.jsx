/*========== EXTERNAL MODULES ==========*/
import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import axios from 'axios';


/*========== INTERNAL MODULES ==========*/
import RecipePreview from './RecipePreview.jsx';


function Form({showForm, setShowForm, setRecipes}) {
  if (!showForm) {
    return null;
  }
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
              <Button value='tsp' name='units' onClick={handleIngredient}>tsp</Button>
              <Button value='Tbsp'name='units' onClick={handleIngredient}>Tbsp</Button>
              <Button value='oz' name='units' onClick={handleIngredient}>ounces</Button>
              <Button value='lbs' name='units' onClick={handleIngredient}>lbs</Button>
              <Button value='c' name='units' onClick={handleIngredient}>cup</Button>
              <Button value='g' name='units' onClick={handleIngredient}>gram(s)</Button>
              <Button value='ml' name='units' onClick={handleIngredient}>ml</Button>
              <Button value='pinch' name='units' onClick={handleIngredient}>pinch</Button>
              <Button value='slice(s)' name='units' onClick={handleIngredient}>slice(s)</Button>
              <Button value='cloves' name='units' onClick={handleIngredient}>clove(s)</Button>
              <Button value='count' name='units' onClick={handleIngredient}>count</Button>
              <Button value='' name='units' onClick={handleIngredient}>clear</Button>
            </ButtonGroup>
        </label>
        <Button onClick={handleAddIngredient} variant='contained' >Add Ingredient</Button>
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
      <Button onClick={handleSubmit}>Submit</Button>
      )
    }

    /*----- RENDERER -----*/
    return ReactDOM.createPortal (
      <Background onClick={() => setShowForm(false)}>
      <Container onClick={(event) => event.stopPropagation()}>
        <Column>
          <h1>Enter your Recipe</h1>
            <label>
              <h3 style={{margin: '0', padding: '0'}}>
              Recipe Name
              <Input
                style={{width: '10em'}}
                type='text'
                name='recipeName'
                placeholder='Grilled Cheese'
                onChange={handleRecipe}
              />
              </h3>
            </label>
            <Row>
              <label>
                Number of Servings
                <Input
                  type='number'
                  name='servings'
                  placeholder='1'
                  onChange={handleRecipe}
                  />
              </label>
              <label>
                <Row>
                  Prep Time:
                  <Input
                    type='number'
                    name='prepTime'
                    placeholder='30'
                    step='1'
                    onChange={handleRecipe}
                    />
                  <p>minutes</p>
                </Row>
              </label>
            </Row>
          <RecipePreview ingredients={recipe.ingredients} recipe={recipe} setRecipe={setRecipe}/>
          {/* {renderIngredientAlert()} */}
          <h4>Add Ingredient</h4>
          {renderEnterIngredient()}
        </Column>
        <ButtonContainer>{renderSubmit()}</ButtonContainer>
      </Container>
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

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3em;
    background-color: #d8d8d8;
    /* background-color: #414141; */
    width: 60vw;
    min-height: 60vh;
    box-sizing: border-box;
    `;

const ButtonContainer = styled.div`
  margin: 1em;
`;

const Row = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display:flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const ButtonGroup = styled.div`
  display:flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Input = styled.input`
  border: solid;
  border-width: thin;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 12pt;
  font-weight: light;
  background-color: transparent;
  width: 3em;
  padding: 2px;
  margin: 10px;
  text-align: center;
  `;