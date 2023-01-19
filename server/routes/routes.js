/*========== EXTERNAL MODULES ==========*/


/*========== INTERNAL MODULES ==========*/
const {
  addRecipe,
  addIngredient,
  findAllRecipes,
  findIngredient,
  findBrand,
} = require('../../database');

/*========== EXPORTS ==========*/
module.exports = {

/*--- GET REQUESTS ---*/
  getRecipes: (req, res) => {
    findAllRecipes()
    .then(recipes => res.json(recipes))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  },

  /** Handles requests for individual ingredients
   * @param {object} req - expects an ingredient name to be passed as a parameter in the request object
   * @param {object} res
   * @return {JSON} ingredient(s) - contains information on the requested ingredient(s)
  */
  getIngredient: (req, res) => {
    findIngredient(req.params)
    .then(ingredientData => res.json(ingredientData))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  },

  /** Handles requests for individual users
   *
   * @param {*} req -
   * @param {*} res
   */
  getUser: (req, res) => {
    res.json(req.params);
  },

/*--- POST REQUESTS ---*/
  /** Handles requests to write recipes to the database
   * @param {object} req - expects a recipe object containing all values of the recipe to be passed as a parameter in the request object
   * @param {object} res
   * @return {string} status 201 if success or error if not
  */
  writeRecipe: (req, res) => {
    addRecipe(req.body)
    .then(response => res.sendStatus(201))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  },

  /** Handles requests to write ingredients to the database
   * @param {object} req - expects an ingredient object containing all values of the ingredient to be passed as a parameter in the request object
   * @param {object} res
   * @return {string} status 201 and index of new ingredient if success OR error if fails
  */
  writeIngredient: (req, res) => {
    addIngredient(req.body)
    .then(response => {
      res.statusCode = 201;
      res.json(response.rows[0]);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong while adding your ingredient'});
    })
  },

/*--- PUT REQUESTS ---*/
  /** Handles creating and updating the targeted user profile
   * @param {object} req - expects a user profile object containing all values for the user profile
   * @param {object} res
   * @return {string} status 201 if success or error if not
  */
  updateUserProfile: (req, res) => {
    res.json(req.body);
  },
}