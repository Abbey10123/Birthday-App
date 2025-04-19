const Router = require ('express').Router
const { join } = require("node:path");

const UserController = require ('../controllers/user.controller');

const route = Router()

route.post("/signup", UserController.signUp);

route.get("/signup", (req, res) =>{
    res.sendFile(join(__dirname, '../../signup.html'))
    })
;




module.exports = route;