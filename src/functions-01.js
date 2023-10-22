/* eslint-disable no-unused-vars */
/*
 * functions-01.js
 * Language: javascript
 * Test: tests/functions-01.test.js
 * Path: src/functions-01.js
 *
 *
 */

/**
 * accepts a string of a person's first and last names and
 * returns a string with "lastname, firstname"
 * @param {string} str - the string with first and last names
 * @returns {string} - the string as last name, first name
 * example: "John Smith" returns "Smith, John"
 * example: 'Buzz Lightyear' returns 'Lightyear, Buzz'
 */
function nameShuffle(str) {
  // Split the string into an array of words
  const nameArray = str.split(' ');

  // Extract the first and last names
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];

  // Form the result string
  const result = `${lastName}, ${firstName}`;
  return result;
}

/**
 * returns true if a pair of strings is a "strange pair",
 * and false otherwise.
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {boolean}
 * A strange pair is when the first letter of one string is
 * the last letter of the other string
 *
 * example: 'ratio', 'orator' returns true
 * example: 'cupid', 'dionysus' returns false
 * example: 'yahtzee', 'easy' returns true
 * example: '&', '&' returns true
 */
function isStrangePair(str1, str2) {
  // Check if the first character of str1 is equal to the last character of str2 and vice versa
  return (
    str1.length > 0
    && str2.length > 0
    && str1[0] === str2[str2.length - 1]
    && str2[0] === str1[str1.length - 1]
  );
}

/**
 * Returns the number from a string with a % sign at the end
 * @param {string} percent - string with an ending % character
 * @returns {number} - the number of the percent
 * example: '10%' returns 0.1
 * example: '100%' returns 1
 * example: '98.6%' returns 0.986
 */
function convertToDecimal(percent) {
  // Remove the "%" character from the string
  const numberString = percent.slice(0, -1);

  // Convert the string to a number and divide by 100 to get the decimal representation
  const result = parseFloat(numberString) / 100;
  return result;
}

/**
 * Returns true if two arrays sum up to the same number
 * @param {array} a1 - first array of numbers to compare
 * @param {array} a2 - second array of numbers to compare
 * @returns {boolean}
 * example: [1, 2, 3, 4], [4, 3, 2, 1] returns true
 * example: [0, 0, 0, 0, 0], [1, 1, 1, 1] returns false
 * example: [1, 2, 3, 4], [4, 3, 2, 1, 5] returns false
 */
function checkSameSum(a1, a2) {
  // If lengths are different, return false
  // if (a1.length !== a2.length) {
  //  return false;
  // }

  // Calculate the sum of elements in each array
  const sumA1 = a1.reduce((acc, curr) => acc + curr, 0);
  const sumA2 = a2.reduce((acc, curr) => acc + curr, 0);

  console.log('sumA1:', sumA1);
  console.log('sumA2:', sumA2);

  // Compare the sums
  return sumA1 === sumA2;
}

/**
 * Saves the username for later use
 * @param {string} name - a username
 * @returns {function} - a function that returns the username
 * example: saveUsername('John') returns a function that returns 'John'
 * must use a closure to save the username
 */
function saveLogin(name) {
  return function getUsername() {
    return name;
  };
}

module.exports = {
  nameShuffle,
  isStrangePair,
  convertToDecimal,
  checkSameSum,
  saveLogin,
};
