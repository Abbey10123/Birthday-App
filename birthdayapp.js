const schedule = require("node-schedule");
const { connectToMongoDB } = require('./db'); 
const birthdayChecker = require ("./src/middlewares/birthdaychecker")


connectToMongoDB()



schedule.scheduleJob('0 7 * * *', () => {
    const check = birthdayChecker();

    console.log(check)
})