/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const express = require('express');
const path = require('path');

/*========== SYSTEM VARIABLES ==========*/
const app = express();
const {PORT} = process.env;


/*========== INTERNAL MODULES ==========*/
const {writeRecipe, getRecipes, getIngredient} = require('./routes/routes');


/*========== MIDDLEWARE ==========*/
app.use('/', express.static(path.join(__dirname,'../client', '/dist')));
app.use(express.json());


/*========== ROUTES ==========*/
app.get('/recipes', getRecipes);
app.get('/ingredient/:ingredient', getIngredient);
app.post('/recipes', writeRecipe);


/*========== SERVER CONNECTIONS ==========*/
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));