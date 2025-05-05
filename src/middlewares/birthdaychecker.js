const UserModel = require("../models/user.model");
const mailSender = require("./nodemailer");
const reSender = require("./resend");


const birthdayChecker =  async () => {
    try{
        const today = new Date();
        console.log("Checking Birthdays..")

        const users = await UserModel.find();
        console.log("Users fetched")

        const birthdayPeople =  users.filter (user => {
            const dob = new Date (user.dob);
            if (dob.getDate() === today.getDate() 
            && dob.getMonth() === today.getMonth()){
                return true
            }
        })
        if (birthdayPeople.length > 0){
            birthdayPeople.forEach(user =>{
                mailSender(user)
            })
            const emails = birthdayPeople.map(u => u.email);
            console.log(emails)
            return emails;
        }
        else { 
            throw "No birthdays today." 
        };
    }
    catch (error){
        console.error("Error in birthdayChecker:", error)
    }
}


module.exports = birthdayChecker