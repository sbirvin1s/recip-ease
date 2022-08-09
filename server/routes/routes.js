/*========== EXTERNAL MODULES ==========*/


/*========== INTERNAL MODULES ==========*/
const {addRecipe, findRecipe} = require('../../database');



/*========== ROUTE HANDLERS ==========*/
const getRecipe = (req, res) => {
  res.json(req.body);
}

const writeRecipe = (req, res) => {
  res.json(req.body);
}

/*========== EXPORTS ==========*/
module.exports = {
  writeRecipe,
  getRecipe,
}