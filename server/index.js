/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const express = require('express');
const path = require('path');

/*========== SYSTEM VARIABLES ==========*/
const app = express();
const { PORT } = process.env;


/*========== INTERNAL MODULES ==========*/
const {
  writeRecipe,
  getRecipes,
  getIngredient,
  writeIngredient,
  getUser,
  writeUserProfile,
  updateUserProfile,
  getUserMetaData,
} = require('./controllers');


/*========== MIDDLEWARE ==========*/
app.use('/', express.static(path.join(__dirname,'../client', '/dist')));
app.use(express.json());

/*TODO: Update add Server Side Rendering(SSR)*/

/*NOTE: Server route request logging
 */
// app.use((req,res,next) => {
//   console.log(
//     `*=== \x1b[34mNew Request Logged:\x1b[0m Type: \x1b[33m${req.method}\x1b[0m REQUEST, URL: \x1b[33m${req.url}\x1b[0m ===*`
//   );
//   next();
// })

/*========== ROUTES ==========*/
/*--- GET ---*/
app.get('/recipes', getRecipes);
app.get('/ingredient/:ingredient', getIngredient);
app.get('/user/:uid', getUser);
app.get('/user/meta/:uid', getUserMetaData);

/*--- POST ---*/
app.post('/ingredient/new', writeIngredient);
app.post('/recipes', writeRecipe);
app.post('/user/create/:uid', writeUserProfile);

/*--- PUT ---*/
app.put('/user/update/:uid', updateUserProfile);


/*========== SERVER CONNECTIONS ==========*/
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));