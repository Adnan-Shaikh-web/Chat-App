
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoute');
const chatRoute = require('./Routes/chatRoute');
require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/chats', chatRoute);


//CRUD  
app.get('/', (req, res) => {
    res.send('Welcome to Our Chat App Api...')
})



const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI



app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`)
})
mongoose.connect(uri).then(() => {
    console.log('Connection successful to atlas')
})