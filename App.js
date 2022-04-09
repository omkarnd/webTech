const express = require('express')
const mongoose = require('mongoose')
const app = express();
const postRoutes = require('./routes/posts');
const bodyParser = require('body-parser');

//middlewares
//function to be executed when routes are called
app.use(bodyParser.json());
app.use('/posts',postRoutes);


//Routes
app.get('/', (req,res) =>{
    res.send('We are currently on home page')
});



//connect to db
const CONNECTION_URL = "mongodb+srv://mongoDbUser:IcanaccessandIwill@cluster0.6yeir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, () => console.log('Connected to the database'))


//listen to requests
app.listen(3000);