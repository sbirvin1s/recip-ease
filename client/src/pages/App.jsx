/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import { matchPath, Link, Outlet, redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import Modal from '../components/Modal.jsx';
import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';
import NavBar from '../components/NavBar.jsx';
import { GlobalStyle, Page, Row } from '../../dist/stylesheets';
import { useAuth } from '../contexts/AuthContext.js';


/*========== EXPORTS ==========*/
export default function App() {

  /*----- STATE HOOKS -----*/
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const { currentUser } = useAuth();

  /*----- LIFECYCLE METHODS -----*/
  useEffect(() =>  {
    const localRecipes = Object.keys(localStorage);
    const newRecipes = localRecipes.map(recipe => localRecipes[recipe] = JSON.parse(localStorage[recipe]))
    setRecipes(newRecipes);
  }, [localStorage]);

  /*----- EVENT HANDLERS -----*/
  const handleClear = () => {
    localStorage.clear();
    setRecipes([]);
  }

  const handleSubmit = ({target: {name, value}}) => {
    event.preventDefault();
  }

  /*----- RENDER METHODS -----*/
  const renderSignInStatus = () => {
    if (!currentUser) {
      return (
        <Link to={'LogIn'}>Sign In</Link>
      )
    } else {
      return (
        <ProfilePlaceholder> <Link to={'Profile'}>P</Link></ProfilePlaceholder>
      )
    }
  }

  // const renderSignInForm = () => {
  //   return (
  //     <Modal
  //       showModal={showSignIn}
  //       setShowModal={setShowSignIn}
  //     >
  //       <Page style={{alignItems: 'space-evenly'}}>
  //         <Button>Sign In</Button>
  //         <Button>Sign In with Google</Button>
  //         <Button>Create Account</Button>
  //       </Page>
  //     </Modal>
  //   )
  // }

  /*----- RENDERER -----*/
  return (
    <>
      <GlobalStyle />
      <Header>
        {renderSignInStatus()}
      </Header>
      <Outlet />
      <NavBar>
        <Link to={'/'}>Home</Link>
        <Link to={'Recipes'}>Recipes</Link>
        <Link to={'AddRecipe'}>Add Recipe</Link>
        <Link to={'ShoppingList'}>Shopping List</Link>
      </NavBar>
    </>
  )
}



/*========== STYLES ==========*/
const ProfilePlaceholder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  font-size: 14pt;
  border-radius: 99%;
  height: 50px;
  width: 50px;
  background-color: #979797;
`;