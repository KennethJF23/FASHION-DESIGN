const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ken@23190",
    database:"fashion_ai",
})

app.listen(8081,()=>{
    console.log("Listening...");
})

app.post('/register', (req, res) => {
    const sentUsername = req.body.UserName;
    const sentPassword = req.body.Password;

    const SQL = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const Values = [sentUsername, sentPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            console.error(" Database Insert Error:", err);
            return res.status(500).send({ error: "Database error", details: err });
        }

        console.log('User inserted successfully');
        res.status(201).send({ message: 'User Added!' });
    });
});
