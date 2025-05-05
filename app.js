const express = require ('express');
const UserRoutes = require ("./src/routes/user.route")
const path = require('path');  

const cors = require('cors');
const birthdayChecker = require('./src/middlewares/birthdaychecker');

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

app.get('/run-scheduler', async (req, res) => {
    try {
        await birthdayChecker();
        res.status(200).send("Birthday check run successfully.");
    } catch (error) {
        console.error("Failed to run birthday check:", error);
        res.status(500).send("Error running birthday check.");
    }
});  


module.exports = app;
