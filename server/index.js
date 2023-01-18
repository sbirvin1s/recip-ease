/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const express = require('express');
const path = require('path');

/*========== SYSTEM VARIABLES ==========*/
const app = express();
const {PORT} = process.env;


/*========== INTERNAL MODULES ==========*/
const {writeRecipe, getRecipes, getIngredient, writeIngredient} = require('./routes/routes');


/*========== MIDDLEWARE ==========*/
app.use('/', express.static(path.join(__dirname,'../client', '/dist')));
app.use(express.json());

/*TODO: Update add SSR and to use rename current 'Routes' to controllers
 */
/*========== ROUTES ==========*/
app.get('/recipes', getRecipes);
app.get('/ingredient/:ingredient', getIngredient);
app.post('/ingredient/new', writeIngredient);
app.post('/recipes', writeRecipe);


/*========== SERVER CONNECTIONS ==========*/
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));