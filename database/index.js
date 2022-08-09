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

const Recipe = mongoose.model('Recipe', recipeSchema);

/*========== DATABASE METHODS ==========*/
const addRecipe = () => {
  // Recipe.findOneAndUpdate
}



/*========== EXPORTS ==========*/
module.exports = {
  addRecipe,
}