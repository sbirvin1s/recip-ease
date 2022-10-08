/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const { Pool } = require('pg');
// const mongoose = require('mongoose');

/*========== INTERNAL MODULES ==========*/


/*========== DATABASE CONNECTION ==========*/
const { DB_USER, DB_PASS, DATABASE, HOST } = process.env;
const pool = new Pool ({
  user: DB_USER,
  host: HOST,
  password: DB_PASS,
  database: DATABASE,
})

pool.connect()
.then(res => console.log('Postgres is connected!'))
.catch(err => console.error(`Unable to connect due to ${err}`))



// mongoose.connect('mongodb://localhost:27017/recip-ease',
//   {
//   useNewUrlParser: true
//   }
// )
// .then(() => console.log('Mongoose is here!'))
// .catch(err => console.error(err))


/*========== SCHEMA ==========*/
// const recipeSchema = new mongoose.Schema({
//   recipeName: {
//     type: String,
//     unique: true,
//     require: true
//   },
//   servings: {
//     type: Number,
//     require: true
//   },
//   ingredients: [
//     {
//       name: String,
//       quantity: Number,
//       units: String
//     }
//   ],
//   prepTime: {
//     type: Number,
//     require: true
//   }
// })

// const shoppingListSchema = new mongoose.Schema({

// })

// const Recipe = mongoose.model('Recipe', recipeSchema);
// const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

/*========== DATABASE METHODS ==========*/
  const findAllRecipes = () => {
    return pool.query('SELECT * FROM recipes')
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve recipes due to ${err}`))
  }

  const findRecipe = (recipe, servings, prepTime, calories) => {
    return pool.query('SELECT * FROM recipes WHERE ',[recipe, servings, prepTime, calories])
  }

  const addRecipe = (recipe) => {

  }

// const findRecipes = () => {
//   return Recipe.find({});
// }

// const addRecipe = (recipe) => {
//   return Recipe.findOneAndUpdate(
//     {recipeName: recipe.recipeName},
//     {...recipe},
//     {upsert: true}
//   )
// }


/*========== EXPORTS ==========*/
module.exports = {
  findAllRecipes,
  addRecipe,
}