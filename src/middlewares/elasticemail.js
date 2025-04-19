
// const elasticemail = require("@elasticemail/elasticemail-client");

// const defaultClient = elasticemail.ApiClient.instance;

// const apikey = defaultClient.authentications['apikey'];
// apikey.apiKey = "process.env.Elastic";

// const api = new elasticemail.EmailsApi();
// console.log("Starting Mail")
// const sendEmail =(user) => {
//         const emailMessageData = {
//             Recipients: [
//               { 
//                 Email: user.email,
//                 Fields: {
//                   name: user.userName
//                 }
//               }
//             ],
//             Content:{
//               Body: [ 
//                 {
//                   ContentType: "PlainText",
//                   Charset: "utf-8",
//                   Content: `Hi {name}, Happy Birthday`,
//                 }
//               ],
//               From: "abiodunraheem23@outlook.com",
//               Subject: `Birthday Message`
//             }
//           };
//           console.log(emailMessageData)
//           try {
//             const response = api.emailsPost(emailMessageData);

//             console.log("Email sent successfully ✅");
//   console.log("Response status:", response.status);
//   console.log("Response data:", response.body || response.text || response);
//           } catch (error) {
//             console.error("Failed to send email:", error);
//           }
//         };

// module.exports = sendEmail
 