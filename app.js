const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

const db = require('./models')


//Routes

app.get('/', (req, res)=>{
    res.send(' Welcome to Author search: you can see authors and their books')
})

app.get('/authors', async(req, res)=>{
    const data = await db.Author.find({})
    res.json(data)
})



const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
