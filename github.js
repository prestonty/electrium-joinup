// const csv = require('csv-parser');
// const fs = require('fs');

// // Read the CSV file
// fs.createReadStream('Test2.csv')
//   .pipe(csv())
//   .on('info', (info) => { // 'data' was previous string ////// keep this is mind!!!
//     results.push(info);
//   })
//   .on('end', () => {
//     // Create a JSON object
//     const info = {};

//     // Populate the JSON object
//     for (const row of results) {
//         info[row.id] = {
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

// });

// // CHAT GPT SUCKSS!!!
// const username = '';
// const email = 'email_of_user_to_invite@example.com';
// const url = `https://api.github.com/orgs/${org}/invitations`;
// const info2 = { email, invitee_login: username };
// axios.post(url, info2, { headers })
//   .then(response => {
//     console.log(`Successfully invited ${username} to ${org} organization.`);
//   })
//   .catch(error => {
//     console.error(`Failed to invite ${username} to ${org} organization. Error: ${error.message}`);
//   });



// env file
require("dotenv").config();
// Octokit.js
// https://github.com/octokit/core.js#readme
const { Octokit } = require("@octokit/core");


async function sendInvitation() {
    const octokit = new Octokit({
        auth: process.env.TOKEN // this is the token of an admin
    })

    // testing
    // console.log("TEAM TESTING");
    // console.log(response.data);

    // get the team id 
    // let role;
    // for(const item of response.data) {
    //     if(item.team && process.env.ROLE.localeCompare(item.team.name) == 0) { // zero means true (first condition checks if it is not undefined)
    //         role = item.team.id;
    //         console.log(item.team.name);
    //         console.log("ROLE: " + role);
    //     }
    // }
    // console.log("ROLE: " + role);

    // retrieve the team_id

    // const team = await octokit.teams.getByName({
    // org: 'Electrium-Mobility',
    // team_slug: process.env.ROLE, // gets id based on user's inputted role
    // });
    // let team_id = team.data.id;


    // adds to the organization
    await octokit.request('POST /orgs/{org}/invitations', {
        org: 'Electrium-Mobility',
        email: process.env.RECEIVER_USER,
        role: 'direct_member',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    // add to a team
  await octokit.request('PUT /orgs/{org}/teams/{team_slug}/memberships/{username}', {
    org: 'Electrium-Mobility',
    team_slug: process.env.ROLE, // the name of the team
    username: process.env.GIT_USER,
    role: process.env.ROLE,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

}

// call the async function
sendInvitation();