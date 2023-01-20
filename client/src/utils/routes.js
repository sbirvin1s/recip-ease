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
import Recipes from '../pages/Recipes.jsx';
import AddRecipe from '../pages/AddRecipe.jsx';
import ShoppingList from '../pages/ShoppingList.jsx';
import AddIngredient from '../pages/AddIngredient.jsx';
import RecipeInfo from '../pages/RecipeInfo.jsx';
import Profile from '../pages/Profile.jsx';
import Error from '../pages/Error.jsx';

/*========== EXPORTS ==========*/
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='Recipes' element={<Recipes />} />
      <Route path='AddRecipe' element={<AddRecipe />} />
      <Route path='ShoppingList' element={<ShoppingList />} />
      <Route path='AddIngredient' element={<AddIngredient />} />
      <Route path='RecipeInfo' element={<RecipeInfo />} />
      <Route path='Profile' element={<Profile />} />
    </Route>
  )
);