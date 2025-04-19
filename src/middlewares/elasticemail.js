
// const elasticemail = require("@elasticemail/elasticemail-client");

// const defaultClient = elasticemail.ApiClient.instance;

// const apikey = defaultClient.authentications['apikey'];
// apikey.apiKey = "3D329EF7DA9DC8CD308D9B498895AC8898C771AB1C2A14ECE9A1D364A4D90A8F539AE92CC95233BD519195736B721044";

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
 