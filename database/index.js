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
  /** Returns all recipes in the database
   * @param {number} page - page number to return. Default of 1 that adjusts to 0 after logic check
   * @param {number} count - number of items per page. Default of 20
   * @return {promise}
  */
  findAllRecipes: (page = 1, count = 20) => {
    let offset = page - 1;
    if (offset < 0) {
      offset = 0;
    } else if (offset > 0) {
      offset = offset * count;
    }

    return pool.query('SELECT row_to_json(recipe) AS recipes \
    FROM ( \
      SELECT *, (SELECT json_agg(list) \
            FROM ( \
              SELECT * FROM ( \
                SELECT ingredient_list.recipe_id, ingredients.ingredient, ingredients.calories, ingredient_list.ingredient_amount, ingredient_list.ingredient_unit FROM ingredient_list \
                INNER JOIN ingredients \
                ON ingredient_list.ingredient_id = ingredients.id \
              ) AS ingredients WHERE recipe_id = r.id \
            ) list \
    ) AS ingredient_list  \
    FROM recipes AS r) recipe OFFSET ($1) ROWS LIMIT ($2)', [offset, count])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve recipes due to ${err}`))
  },

  /** Searches database for all recipes that belong to a user
    * @param {string} userId - name of user
    * @return {promise}
  */
  findMyRecipes: (userId) => {
    return pool.query('SELECT * FROM recipes_book WHERE user_id = ($1)', [user_id])
  },

  /** Searches database for a recipe that matches one, or a combination of, the search terms
    * @param {string} recipe - name of the recipe
    * @param {number} servings - number of servings the recipe will make
    * @param {number} prepTime - amount of time required to complete the recipe measured in minutes
    * @param {number} calories - selected food category from supplied list
    * @return {promise}
  */
  // TODO: Implement findRecipe using the same logic as findIngredient
  findRecipe: ({ recipe, servings, prepTime, calories }) => {
    // return pool.query('SELECT * FROM recipes WHERE ', [recipe, servings, prepTime, calories])
    return pool.query('SELECT * FROM recipes WHERE = ($1)', [recipe, servings, prepTime, calories])
  },

  /** Adds new recipe to the database
   * @param {object} recipe - contains name, img, servings_count, prep_time, instructions, and array of ingredients
   * @return {promise}
  */
  /* TODO: add functionality to create scannable barcode for recipes
    * unique key, with an alpha-numeric composition to prevent collisions with UPCs
    * generate upon adding to databse and return barcode / QR code to be shared or printed as a label
  */
  /* NOTE: will need to send information to ingredient list for each ingredient
    * will need to perform sum for each nutrient (might have this value stored on each recipe or calculate on demand)
    * will need to insert record of each ingredient (ingredient_id) and recipe_id into ingredient_list table
  */
  addRecipe: ({
    name = 'carrots and potatoes',
    img = null, servings  = 6,
    prep = 30, instructions  = 'cook it',
    ingredients = [[416236, 10, 'g'], [636447, 20, 'g'], [145537, 30, 'g'], [618610, 40, 'g']],
    userId }) => {

    return pool.query('INSERT INTO recipes (recipe_name, recipe_img, servings, prep_time, instructions) VALUES (($1), ($2), ($3), ($4), ($5)) RETURNING id', [name, img, servings, prep, instructions])
    .then(id => {
      let recipeId = id.rows[0].id;
      // pool.query('INSERT INTO recipe_book VALUES (($1), ($2))', [userId, recipeId]);
      return ingredients.forEach(ingredient => {
        [ingredientName, ingredientAmount, ingredientUnit] = ingredient;
        return pool.query('INSERT INTO ingredient_list (recipe_id, ingredient_id, ingredient_amount, ingredient_unit) VALUES (($1), ($2), ($3), ($4))', [recipeId, ingredientName, ingredientAmount, ingredientUnit])
      })
    })
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /** Searches the database for an ingredient whose name matches the search term
    * @param {string} ingredient - name of the ingredient
    * @return {promise}
  */
  findIngredient: ({ ingredient }) => {
    ingredient = ingredient.toLowerCase();
    return pool.query('SELECT * FROM ingredients WHERE LOWER(ingredient) LIKE ($1)', ['%' + ingredient + '%'])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /** Searches the database for an ingredient whose name matches the search term
    * @param {string} brand - name of the brand of the ingredient
    * @return {promise}
  */
  findBrand: ({ brand }) => {
    return pool.query('SELECT * FROM ingredients WHERE brand = ($1)', [brand])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /** Searches the database for an ingredient whose name matches the search term
    * @param {string} food_category - selected food category from supplied list
    * @return {promise}
  */
  findCategory: ({ foodCategory }) => {
    return pool.query('SELECT * FROM ingredients WHERE food_category = ($1)', [foodCategory])
    .then(response => response.rows)
    .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },

  /** Searches the database for an ingredient that matches the given UPC
    * @param {string} upc - results of scanning the barcode, stored as string.
    * @return {promise}
  */
  scanIngedient: ({ upc }) => {
    return pool.query('SELECT * FROM ingredients WHERE upc = ($1)', [upc])
      .then(response => response.rows)
      .catch(err => console.error(`Unable to retrieve ingredient due to ${err}`))
  },


  /** Adds new ingredient to database
   * @param {object} newIngredient - Object containing all nutrition information for new ingredient
   * @return {promise}
  */
  addIngredient: (newIngredient) => {
    const {
        ingredientName, brand, foodCategory,
        barcode, servingSize, servingUnit,
        servingPerContainer, calories, totalFat,
        satFat, transFat, polyUnSatFat,
        monoUnSatFat, cholesterol, sodium,
        totalCarbs, fiber, sugar,
        protein, vitaminA, vitaminC, vitaminD,
        calcium, iron, potassium
    } = newIngredient;

    return pool.query(
      'INSERT INTO ingredients ( \
        ingredient, brand, food_category, upc, serving_size, serving_unit, servings_per_container, calories, total_fat, sat_fat, trans_fat, poly_fat, mono_fat, cholesterol, sodium, total_carbs, fiber, sugar, protein, vitamin_a, vitamin_c, vitamin_d, calcium, iron, potassium \
      ) \
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) \
      RETURNING *;', [
      ingredientName, brand, foodCategory,
      barcode, servingSize, servingUnit,
      servingPerContainer, calories, totalFat,
      satFat, transFat, polyUnSatFat,
      monoUnSatFat, cholesterol, sodium,
      totalCarbs, fiber, sugar,
      protein, vitaminA, vitaminC, vitaminD,
      calcium, iron, potassium
    ])
  },
}