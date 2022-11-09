/*========== EXTERNAL MODULES ==========*/
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

/*========== INTERNAL MODULE ==========*/
import App from '../pages/App.jsx';
import Home from '../pages/Home.jsx';
import Recipes from '../pages/Recipes.jsx';
import AddRecipe from '../pages/AddRecipe.jsx';
import ShoppingList from '../pages/ShoppingList.jsx';
import AddIngredient from '../pages/AddIngredient.jsx';
import RecipeInfo from '../pages/RecipeInfo.jsx';
import Error from '../pages/Error.jsx';

/*========== EXPORTS ==========*/
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Recipes',
        element: <Recipes />,
      },
      {
        path: 'AddRecipe',
        element: <AddRecipe />,
      },
      {
        path: 'ShoppingList',
        element: <ShoppingList/>,
      },
      {
        path: 'AddIngredient',
        element: <AddIngredient />,
      },
      {
        path: 'RecipeInfo',
        element: <RecipeInfo />,
      },
    ]
  }
]);