// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("arrayShuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron"
  ]
  it("Takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(arrayShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(arrayShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))

  })
})
// output:  FAIL  ./code-challenges.test.js
//   arrayShuffle
//   ✕ Takes in an array, removes the first item from the array and shuffles the remaining content. (2 ms)
// ● arrayShuffle › Takes in an array, removes the first item from the array and shuffles the remaining content.
//   ReferenceError: arrayShuffle is not defined

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
// Pseudocode
// input: Array of words
// output: Array of words with first item removed and the rest of the items shuffled. 
// Create a funciton that takes in an array of words as a parameter.
// Fisher-Yates shuffle algorithm
const arrayShuffle = (arr) => {
    let j = null //initializes variable before for loop to always execute
  for (let i = arr.length - 1; i > 0; i--) { // looping through the array in reverse order
    j = Math.floor(Math.random() * (i + 1)) // sets j to hold a random number between 0 and i
    [arr[i], arr[j]] = [arr[j], arr[i]] // shuffles array indicies i and j
  }
  return arr
}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("tallyCount", () => {
  const votes1 = { upVotes: 13, downVotes: 2 }
  const votes2 = { upVotes: 2, downVotes: 33 }
  it("Takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(tallyCount(votes1)).toEqual(11)
    expect(tallyCount(votes2)).toEqual(-31)
  })
})
// ● tallyCount › Takes in an object that contains up votes and down votes and returns the end tally.
//     ReferenceError: tallyCount is not defined

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31

// b) Create the function that makes the test pass.
//Pseudocode
// input: Object with two key value pairs
// output: Number positive votes - negative votes
const tallyCount = (obj) => { 
  const { upVotes, downVotes } = obj //Destructuring object
  return upVotes - downVotes // Subtracting downvotes from upvotes
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDupes", () => {
  const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
  const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
  it("Takes in an object that contains up votes and down votes and returns the end tally.", () => {
    expect(noDupes(dataTypesArray1, dataTypesArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))  
  })
})
// noDupes
//     ✕ Takes in an object that contains up votes and down votes and returns the end tally.
//   ● noDupes › Takes in an object that contains up votes and down votes and returns the end tally.
//     ReferenceError: noDupes is not defined

// const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
const noDupes = (...arrays) => { 
  const mergedArray = [].concat(...arrays) // Merge all arrays into one
  const uniqueArray = [...new Set(mergedArray)] // Use Set to remove duplicates and convert back to array
  return uniqueArray // Return the array with unique values
}

