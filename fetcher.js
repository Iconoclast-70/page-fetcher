const request = require('request');
const fs = require('fs');
let args = process.argv.slice(2);

if (args.length === 2) {
  request(args[0], (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //write the contents of http://www.example.com to /vagrant/w2/d3/page-fetcher/example.txt
    fs.writeFile(args[1], body, err => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
}


