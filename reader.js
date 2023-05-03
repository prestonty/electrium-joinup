// CODE DOES NOT WORK

// const csv = require('csv-parser');
// const fs = require('fs');
// // reads .env file and makes the variables accessible through process.env
// require("dotenv").config();

// const results = [];

// // adds a module
//   const nodemailer = require('nodemailer');

//   let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: process.env.USER,
//       pass: process.env.PASS
//   }
//   });

//   console.log("credentials");
//   console.log(process.env.USER);
//   console.log(process.env.PASS);

// // Read the CSV file
// fs.createReadStream('Test2.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     results.push(data);
//   })
//   .on('end', () => {
//     // Create a JSON object
//     const data = {};

//     // Populate the JSON object
//     for (const row of results) {
//       data[row.id] = {
//         first_Name: row.first_Name,
//         last_Name: row.last_Name,
//         email: row.email,
//         github: row.github,
//         discord_username: row.discord_username,
//         project_Team: row.project_Team,
//         sub_Team: row.sub_Team,
//         joined_Discord: row.joined_Discord,
//         joined_Clickup: row.joined_Clickup,
//         joined_Github: row.joined_Github
//       };
//     }

//     // const myObj = JSON.parse(data);

//     // run for each object in results
//     for(const row of results) {
//       // making the message and sending the email
//       console.log("email debugging\nemail: " + row.email + "\nname: " + row.first_Name + " " + row.last_Name);
//       const mailOptions = {
//         from: 'Preston',
//         to: row.email, // this is wrong, fix
//         subject: 'Join the Electrium Family',
//         text: "Github Link: (insert) \nClickup Link: (insert) \nThis you?" + row.first_Name + " " + row.last_Name + "????"
//         };
      
//         // send the email
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
//     }

    

//   });


  

