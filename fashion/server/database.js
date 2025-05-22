const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const UserModel = require('./models/FASHION');


const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/FASHION")

app.listen(3001,()=>{
    console.log("Server is running");
})

app.post('/register', (req, res) => {
    UserModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
});
