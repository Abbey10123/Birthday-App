const UserModel = require ("../models/user.model");
require("dotenv").config();

const signUp = async ({email, userName, dob})=>{
    try {

        const findMe = await UserModel.findOne({email});
        if (findMe){
            return {
                code: 400,
                success: false,
                data: null,
                message: 'Your Birthday has already been added'
            }
        }

        const newUser = await UserModel.create({
            email,
            userName,
            dob
        })

        return{
            code: 201,
            success: true,
            message: 'Addedsuccessful',
            data: {
                user: {email, userName, dob},
            }
        }
    }
    catch (error){
        return {
            code: 500,
            success: false,
            message: error.message
        }

    }

}

module.exports = {signUp}