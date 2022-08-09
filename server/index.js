/*========== EXTERNAL MODULES ==========*/
require('dotenv').config();
const express = require('express');


/*========== SYSTEM VARIABLES ==========*/
const app = express;
const {PORT} = process.env;


/*========== INTERNAL MODULES ==========*/
const {} = require('./routes');


/*========== MIDDLEWARE ==========*/
app.use('/', express.static());
app.use(express.json());


/*========== ROUTES ==========*/
app.get('/recipes', );
app.post('/recipes', )


/*========== SERVER CONNECTIONS ==========*/
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));