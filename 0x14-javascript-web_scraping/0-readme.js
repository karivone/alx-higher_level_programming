#!/usr/bin/node

/*
 * This script prints the contents of a file
 * The first argument is the file path
 * The content of the file must be read in utf-8
 * If an error occurred during the reading, print the error object
 */

const fs = require('fs');
const filePath = process.argv[2]; // get the file path from the first command line argument

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err); // print the error object if an error occurred during reading
    return;
  }
  console.log(data); // print the content of the file
});

