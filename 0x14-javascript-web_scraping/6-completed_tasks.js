#!/usr/bin/node

/*
 * This script computes the number of tasks completed by user id.
 * The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
 */

const request = require('request'); // Import request module
const url = process.argv[2]; // Get the URL from the first argument

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completed = {}; // Create an empty object to store the results
    for (let i = 0; i < todos.length; i++) {
      const task = todos[i];
      if (task.completed === true) {
        if (completed[task.userId] === undefined) { // If the user id is not in the object, add it
          completed[task.userId] = 1; // Set the value to 1
        } else {
          completed[task.userId] += 1; // If the user id is in the object, increment the value
        }
      }
    }
    console.log(completed);
  }
});
