const csv = require('csv-parser');
const fs = require('fs');

// Read the CSV file using fs module
fs.createReadStream('Test2.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Process each row of data
    
    // for each item, send an email based on their last tags
    const dataArr = row.split(',');
    const person = {
      first_Name: dataArr[0],
      last_Name: dataArr[1],
      email: dataArr[2],
      github: dataArr[3],
      discord_username: dataArr[4],
      project_Team: dataArr[5],
      sub_Team: dataArr[6],
      joined_Discord: dataArr[7],
      joined_Clickup: dataArr[8],
      joined_Github: dataArr[9]
    };
    console.log("1111 " + dataArr[0]);
    console.log("BREAKBREAK");
    console.log(row);
  })
  .on('end', () => {
    // Handle end of CSV file
    console.log('CSV file successfully processed.');
  });
