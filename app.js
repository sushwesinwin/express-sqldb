const express = require("express");
const app = express();

const dotenv = require('dotenv').config();
const port = process.env.port || 4000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (_req, res) => {
    res.send('Welcome From the Home Page');
})

const path = require('path'); // import path module
app.set('views', path.join(__dirname, 'views')); // set the views dir (setting name, value)
app.set('view engine', 'ejs'); //set the view engine to ejs

//app.use() tell express to use the middlewareserve static file
app.use(express.static('./public')); 
