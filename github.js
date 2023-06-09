// env file
require("dotenv").config();
// Octokit.js
// https://github.com/octokit/core.js#readme
const { Octokit } = require("@octokit/core");

const csv = require("csv-parser");
const fs = require("fs");

const invite_not_sent = -1;
const invite_pending = 0;
const invite_accepted = 1;

// CSV WRITTER
// write to csv file
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "Test2.csv",
  header: [
    { id: "first_Name", title: "first_Name" },
    { id: "last_Name", title: "last_Name" },
    { id: "email", title: "email" },
    { id: "github", title: "github" },
    { id: "discord_username", title: "discord_username" },
    { id: "team", title: "team" },
    { id: "project", title: "project" },
    { id: "joined_Github", title: "joined_Github" },
    { id: "joined_Discord", title: "joined_Discord" },
    { id: "joined_Clickup", title: "joined_Clickup" },
  ],
  append: true, // set to true to append to an existing file
});
const data = {};
const results = [];
// Read the CSV file
fs.createReadStream("Test2.csv")
  .pipe(csv())
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    // Create a JSON object
    const data = {};

    // Populate the JSON object
    for (const row of results) {
      data[row.id] = {
        name: row.name,
        email: row.email,
        github: row.github,
        discord_username: row.discord_username,
        team: row.team,
        project: row.project,
        joined_Github: row.joined_Github,
        joined_Discord: row.joined_Discord,
        joined_Clickup: row.joined_Clickup,
      };

      console.log(row.email, row.team, row.github);
      if (data[row.id].joined_Github == invite_not_sent) {
        sendInvitation(row.email, row.team, row.github);
        data[row.id].joined_Github = 0; // change invite status
        console.log(data[row.id].joined_Github);
        console.log("Invite sent for " + row.name + "\n");
      } else if (
        data[row.id].joined_Github == invite_pending ||
        data[row.id].joined_Github == invite_accepted
      ) {
        console.log("Already sent invite");
      }
    }
  });

// Update csv with status
csvWriter
  .writeRecords(data)
  .then(() => console.log("The CSV file was updated successfully"));

console.log(data);

async function sendInvitation(receiver_email, team_name, github_user) {
  const octokit = new Octokit({
    auth: process.env.TOKEN, // this is the token of an admin for the organization
  });

  // invite to organization
  await octokit.request("POST /orgs/{org}/invitations", {
    org: "Electrium-Mobility",
    email: receiver_email,
    role: "direct_member",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  // invite to team
  await octokit.request(
    "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}",
    {
      org: "Electrium-Mobility",
      team_slug: team_name, // the name of the team
      username: github_user,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
}
