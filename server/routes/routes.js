/*========== EXTERNAL MODULES ==========*/


/*========== INTERNAL MODULES ==========*/
const {addRecipe, findAllRecipes} = require('../../database');



/*========== ROUTE HANDLERS ==========*/
const getRecipes = (req, res) => {
  findAllRecipes()
  .then(recipes => res.json(recipes))
  .catch(err => {
    console.error(err);
    return res.status(500).json({Error: 'Something went wrong processing your request'});
  })
}

const writeRecipe = (req, res) => {
  addRecipe(req.body)
  .then(response => res.sendStatus(201))
  .catch(err => {
    console.error(err);
    return res.status(500).json({Error: 'Something went wrong processing your request'});
  })
}

/*========== EXPORTS ==========*/
module.exports = {
  writeRecipe,
  getRecipes,
}