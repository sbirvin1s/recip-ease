/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/*========== INTERNAL MODULE ==========*/
import App from '../pages/App.jsx';
import Home from '../pages/Home.jsx';
import Error from '../pages/Error.jsx';
import SignUp from '../pages/user/SignUp.jsx';
import LogIn from '../pages/user/LogIn.jsx';
import BasicInfo from '../pages/user/BasicInfo.jsx';
import WeightSelector from '../pages/user/WeightSelector.jsx';
import FitnessLevelSelector from '../pages/user/FitnessLevelSelector.jsx';
import WeightGoals from '../pages/user/WeightGoals.jsx';
import SignUpReview from '../pages/user/SignUpReview.jsx';
import Profile from '../pages/user/Profile.jsx';
import Recipes from '../pages/recipe/Recipes.jsx';
import AddRecipe from '../pages/recipe/AddRecipe.jsx';
import RecipeInfo from '../pages/recipe/RecipeInfo.jsx';
import ShoppingList from '../pages/shoppingList/ShoppingList.jsx';
import AddIngredient from '../pages/ingredient/AddIngredient.jsx';

/*========== EXPORTS ==========*/
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route path='SignUp' element={<SignUp />} />
      <Route index element={<Home />} />
      <Route path='Recipes' element={<Recipes />} />
      <Route path='AddRecipe' element={<AddRecipe />} />
      <Route path='ShoppingList' element={<ShoppingList />} />
      <Route path='AddIngredient' element={<AddIngredient />} />
      <Route path='RecipeInfo' element={<RecipeInfo />} />
      <Route path='Profile' element={<Profile />} />
      <Route path='LogIn' element={<LogIn />} />
      <Route path='WeightSelector' element={<WeightSelector />} />
      <Route path='FitnessLevelSelector' element={<FitnessLevelSelector />} />
      <Route path='WeightGoals' element={<WeightGoals />} />
      <Route path='BasicInfo' element={<BasicInfo />} />
      <Route path='Review' element={<SignUpReview />} />
    </Route>
    )
);