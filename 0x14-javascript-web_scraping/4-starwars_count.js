#!/usr/bin/node

/*
 * This script counts the number of movies where the character “Wedge Antilles” is present.
 * The first argument is the file path to the JSON file
 * Wedge Character ID: 18
 */

const request = require('request');
const characterId = '18'; // set the character ID for "Wedge Antilles"
const apiUrl = process.argv[2]; // get the API URL from the first command line argument

request(apiUrl, (err, response, body) => {
  if (err) {
    console.error(err); // print the error object if an error occurred during the request
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
    return;
  }

  const films = JSON.parse(body).results;
  const numMovies = films.filter((film) => {
    return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
  }).length;

  console.log(`Number of movies where "Wedge Antilles" appears: ${numMovies}`);
});
