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

  writeRecipe: (req, res) => {
    addRecipe(req.body)
    .then(response => res.sendStatus(201))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  },

  getIngredient: (req, res) => {
    findIngredient(req.params)
    .then(ingredientData => res.json(ingredientData))
    .catch(err => {
      console.error(err);
      return res.status(500).json({Error: 'Something went wrong processing your request'});
    })
  }
}