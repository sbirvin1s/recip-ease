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
  recipeName: {
    type: String,
    unique: true,
    require: true
  },
  servings: {
    type: Number,
    require: true
  },
  ingredients: [
    {
      name: String,
      quantity: Number,
      units: String
    }
  ],
  prepTime: {
    type: Number,
    require: true
  }
})

const shoppingListSchema = new mongoose.Schema({

})

const Recipe = mongoose.model('Recipe', recipeSchema);
const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

/*========== DATABASE METHODS ==========*/
const findRecipes = () => {
  return Recipe.find({});
}

const addRecipe = (recipe) => {
  return Recipe.findOneAndUpdate(
    {recipeName: recipe.recipeName},
    {...recipe},
    {upsert: true}
  )
}


/*========== EXPORTS ==========*/
module.exports = {
  findRecipes,
  addRecipe,
}