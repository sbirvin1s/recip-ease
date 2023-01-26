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
} = require('./routes/routes');


/*========== MIDDLEWARE ==========*/
app.use('/', express.static(path.join(__dirname,'../client', '/dist')));
app.use(express.json());

/*TODO: Update add Server Side Rendering(SSR) and to use rename current 'Routes' to controllers*/

/*TODO: #32 User Profile - Server Implementation
  - [ ] Create API route for client and server communication
    - [ ] GET route to get all user information
      - [ ] Current Weight, Fitness Level, Weight Loss goals, and daily caloric goal
  - [ ] POST / PUT route(s) to:
    - [ ] Create new account
    - [ ] Update account information
    - [ ] Add / Update weight
    - [ ] Add / Update Fitness Level
    - [ ] Add / Update weight loss goals
*/

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