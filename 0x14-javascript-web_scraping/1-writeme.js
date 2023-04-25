#!/usr/bin/node

/*
 * This script writes a string to a file
 * The first argument is the file path
 * The second argument is the string to write
 * The content of the file must be written in utf-8
 * If an error occurred during while writing, print the error object
 */

const fs = require('fs');
const filePath = process.argv[2]; // get the file path from the first command line argument
const content = process.argv[3]; // get the content to write from the second command line argument

fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.log(err); // print the error object if an error occurred during writing
  }
});
