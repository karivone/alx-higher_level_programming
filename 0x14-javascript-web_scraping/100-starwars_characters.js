#!/usr/bin/node

/*
 * This script will print all characters of a Star Wars movie
 * The first argument is the Movie ID - example: 3 = “Return of the Jedi”
 * Display one character name by line
 */

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    getCharacter(characters, 0); // 0 is the index for the first character
  }
});

function getCharacter (characters, index) { // Our function accepts an array of characters and an index
  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
    }
    if (index + 1 < characters.length) { // If the index is less than the length of the array, call the function again
      getCharacter(characters, index + 1); // We increment the index by 1
    }
  });
}
