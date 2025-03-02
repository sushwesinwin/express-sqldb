const express = require("express");
const app = express();

const dotenv = require('dotenv').config();
const port = process.env.port || 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (_req, res) => {
    res.render('index');
})

const path = require('path'); // import path module
app.set('views', path.join(__dirname, 'views')); // set the views dir (setting name, value)
app.set('view engine', 'ejs'); //set the view engine to ejs

//app.use() tell express to use the middlewareserve static file
app.use(express.static('./public')); 

const userRoutes = require('./routes/userRoutes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRoutes); //Since you're using app.use('/users', userRoutes), your actual API URL is /users/api
