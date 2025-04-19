const express = require ('express');
const UserRoutes = require ("./src/routes/user.route")
const path = require('path');  

const cors = require('cors');

const app = express();

app.use(express.json());
app.use('/user', UserRoutes)
app.use(cors())


app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, 'welcome.html'))
})

app.get('/bye.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'bye.html'));  
  });



module.exports = app;
