#!/usr/bin/node

/*
 * This script prints the title of a Star Wars movie
 * The title should match the given integer
 */

const request = require('request');
const episodeNumber = parseInt(process.argv[2]); // get the episode number from the first command line argument

request(`https://swapi-api.alx-tools.com/api/films/${episodeNumber}`, (err, response, body) => {
  if (err) {
    console.error(err); // print the error object if an error occurred during the request
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
    return;
  }

  const movie = JSON.parse(body);
  console.log(`Title of Episode ${episodeNumber}: ${movie.title}`);
});

