const UserService = require ("../services/user.service");

const signUp = async (req, res) => {
    const payload = req.body;
    const signUpResponse = await UserService.signUp ({
       email: payload.email,
       userName: payload.username,
       dob: payload.dob 
    })
    res.status(signUpResponse.code).json(signUpResponse)
}



module.exports = {
    signUp
}