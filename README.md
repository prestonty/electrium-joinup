# Electrium Joinup
## Invite Email

### Installing packages
Run ` npm install octokit`
Run `npm install dotenv`
Run `npm install csv-parser`
Run `npm install csv-writer`

### Setup
For csv reader and writer, replace the csv file name with your own (Replace Test2.csv)
Make sure your csv file contains the correct headers (name, email, github, discord_username, team, project, joined_Github, joined_Discord, joined_Clickup)
Follow the .env.template to have the correct personal token & email credentials.

### Running
Run `node github.js`
