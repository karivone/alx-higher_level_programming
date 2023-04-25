#!/usr/bin/node

/*
 * This script counts the number of movies where the character “Wedge Antilles” is present.
 * The first argument is the file path to the JSON file
 * Wedge Character ID: 18
 */

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    let count = 0;
    const films = JSON.parse(body).results;
    for (let i = 0; i < films.length; i++) {
      let j = 0;
      const character = films[i].characters;
      while (j < character.length) {
        if (character[j].includes('18')) {
          count++;
        }
        j++;
      }
    }
    console.log(count);
  }
});
