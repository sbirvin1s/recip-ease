/*========== EXTERNAL MODULES ==========*/


/*========== INTERNAL MODULES ==========*/
const {
  addRecipe, findAllRecipes, findIngredient,
  findBrand,
} = require('../../database');

/*========== EXPORTS ==========*/
module.exports = {
  getRecipes: (req, res) => {
    findAllRecipes()
    .then(recipes => res.json(recipes))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  },

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
  }
}