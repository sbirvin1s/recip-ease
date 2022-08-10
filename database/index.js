/*========== EXTERNAL MODULES ==========*/
const mongoose = require('mongoose');

/*========== INTERNAL MODULES ==========*/


/*========== DATABASE CONNECTION ==========*/
mongoose.connect('mongodb://localhost:27017/recip-ease',
  {
  useNewUrlParser: true
  }
)
.then(() => console.log('Mongoose is here!'))
.catch(err => console.error(err))


/*========== SCHEMA ==========*/
const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [
    {
      ingredient: String,
      quantity: Number,
      units: String
    }
  ],
  serving_size: Number,
})

const shoppingListSchema = new mongoose.Schema({

})

const Recipe = mongoose.model('Recipe', recipeSchema);
const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

/*========== DATABASE METHODS ==========*/
const findRecipe = () => {
  return Recipe.find({});
}

const addRecipe = (recipe) => {
  return Recipe.findOneAndUpdate(

  )
}


/*========== EXPORTS ==========*/
module.exports = {
  findRecipe,
  addRecipe,
}