const nodemailer = require('nodemailer');
const dotenv = require('dotenv');


const transporter = nodemailer.createTransport({
    service: process.env.SERVER,
    auth: {
        user: process.env.SMTP,
        pass: process.env.GSMTP
    }
})

const mailSender = async (user) => {
      const mailDetails = {
        from: 'BIRTHDAY@mail.com',
        to: user.email,
        subject: `🎉 Happy Birthday, " + user.userName + "!"`,
        html: 
        `<div style="font-family: Arial, sans-serif; background: #fefefe; padding: 30px; text-align: center; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); max-width: 500px; margin: auto;">
        <h1 style="color: #ff6f61;">🎂 Happy Birthday, ${user.userName}!</h1>
        <p style="font-size: 16px; color: #333;">
          Wishing you a day filled with joy, love, and beautiful surprises.<br/>
          May this year bring you closer to your dreams!
        </p>
        <p style="margin-top: 20px; color: #999; font-size: 14px;">
          From all of us at <strong>Birthday Wishes & Co</strong> 💼
        </p>
      </div>`
        
      }
      try {
        const info = await transporter.sendMail(mailDetails);
        console.log('Email sent:', info.response);
        } 
     catch (error) {
        console.log('Failed to send email:', error);
     }

}

module.exports = mailSender