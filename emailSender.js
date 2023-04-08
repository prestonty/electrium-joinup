const fs = require('fs');
const parse = require('csv-parse');

fs.readFile('Test2.csv', function(err, fileData) {
  parse(fileData, { columns: true }, function(err, rows) {
    console.log(rows);
  });
});