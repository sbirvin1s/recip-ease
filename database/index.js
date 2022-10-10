/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const { Pool } = require('pg');

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


/*========== EXPORTS ==========*/
module.exports = {
  /**Returns all recipes in the database
   * @return {JSON}
   */
  findAllRecipes: () => {
    return pool.query('SELECT * FROM recipes')
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve recipes due to ${err}`))
  },

  /**Searches database for all recipes that belong to a user
    * @param {string} userId - name of user
    * @return {JSON}
  */
  findMyRecipes: (userId) => {
    return pool.query('SELECT * FROM recipes_book WHERE user_id = ($1)', [user_id])
  },

  /**Searches database for a recipe that matches one, or a combination of, the search terms
    * @param {string} recipe - name of the recipe
    * @param {number} servings - number of servings the recipe will make
    * @param {number} prepTime - amount of time required to complete the recipe measured in minutes
    * @param {number} calories - selected food category from supplied list
    * @return {JSON}
  */
  // TODO: Implement findRecipe using the same logic as findIngredient
  findRecipe: (recipe, servings, prepTime, calories) => {
    return pool.query('SELECT * FROM recipes WHERE ', [recipe, servings, prepTime, calories])
  },

  /* TODO: add functionality to create scannable barcode for recipes
    * unique key, with an alpha-numeric composition to prevent collisions with UPCs
    * generate upon adding to databse and return barcode / QR code to be shared or printed as a label
  */
  addRecipe: (recipe) => {

  },

  /**Searches the database for an ingredient whose name matches the search term
    * @param {string} ingredient - name of the ingredient
    * @return {JSON}
  */
  findIngredient: ({ ingredient }) => {
    return pool.query('SELECT * FROM ingredients WHERE ingredient = ($1)', [ingredient])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /**Searches the database for an ingredient whose name matches the search term
    * @param {string} brand - name of the brand of the ingredient
    * @return {JSON}
  */
  findBrand: ({ brand }) => {
    return pool.query('SELECT * FROM ingredients WHERE brand = ($1)', [brand])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /**Searches the database for an ingredient whose name matches the search term
    * @param {string} food_category - selected food category from supplied list
    * @return {JSON}
  */
  findCategory: ({ foodCategory }) => {
    return pool.query('SELECT * FROM ingredients WHERE food_category = ($1)', [foodCategory])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /**Searches the database for an ingredient that matches the given UPC
    * @param {string} upc - results of scanning the barcode, stored as string.
    * @return {JSON}
  */
  scanIngedient: ({ upc }) => {
    return pool.query('SELECT * FROM ingredients WHERE upc = ($1)', [upc])
      .then(response => response.rows)
      .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },


  /**Adds new ingredient to database
   * @param {object} newIngredient - Object containing all nutrition information for new ingredient
   */
  addIngredient: (newIngredient) => {
    // const {
      //   ingredient, brand, food_category,
      //   upc, serving_size, serving_unit,
      //   calories, total_fat, sat_fat,
      //   trans_fat, poly_fat, mono_fat,
      //   cholesterol, sodium, total_carbs,
      //   fiber, sugar, protein,
      //   vitamin_a, vitamin_c, vitamin_d,
      //   calcium, iron, potassium
      // } = newIngredient;
      // return pool.query('INSERT INTO ingredients VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24);', [
        //   ingredient, brand, food_category,
        //   upc, serving_size, serving_unit,
        //   calories, total_fat, sat_fat,
    //   trans_fat, poly_fat, mono_fat,
    //   cholesterol, sodium, total_carbs,
    //   fiber, sugar, protein,
    //   vitamin_a, vitamin_c, vitamin_d,
    //   calcium, iron, potassium
    // ])
    return pool.query('INSERT INTO ingredients VALUES ($1);', [newIngredient]);
  },

}