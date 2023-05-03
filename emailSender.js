const fs = require('fs');
const { parse } = require('csv-parse');

const template = fs.readFileSync('template.html', 'utf-8');

fs.readFile('Test2.csv', function(err, fileData) {
  parse(fileData, { columns: true }, function(err, rows) {
    console.log(rows);
    for(rowNum in rows) {
      console.log(template.replaceAll('{name}', rows[rowNum].first_Name));
      // TODO: eventually replace this with an email, also store discord link somewhere
    }
  });
});