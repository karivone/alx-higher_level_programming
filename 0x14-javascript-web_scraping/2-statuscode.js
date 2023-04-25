#!/usr/bin/node

/*
 * Displays a status code of a GET request
 * First argument is the URL to request
 * The status code must be printed like this: code: <status code>
 */

const request = require('request');
const url = process.argv[2]; // get the URL to request from the first command line argument

request.get(url, (err, response) => {
  if (err) {
    console.error(err); // print the error object if an error occurred during the request
    return;
  }
  console.log(`code: ${response.statusCode}`); // print the status code
});

