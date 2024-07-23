const express=require('express');
const app=express();
require('dotenv').config();

const PORT = 2000; 


const data = [
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "age": 28,
        "isStudent": true
    },
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com",
        "age": 34,
        "isStudent": false
    },
    {
        "id": 3,
        "name": "Charlie",
        "email": "charlie@example.com",
        "age": 22,
        "isStudent": true
    },
    {
        "id": 4,
        "name": "Diana",
        "email": "diana@example.com",
        "age": 30,
        "isStudent": false
    },
    {
        "id": 5,
        "name": "Eve",
        "email": "eve@example.com",
        "age": 25,
        "isStudent": true
    }
]


app.get('/', (req,res) => {

    res.send("This is home page in this app");
})


app.get('/index', (req,res) => {
    res.status(200).json(data); 
})




app.listen(PORT, () => {
console.log(`The server runnning of the ${PORT} port `);
});