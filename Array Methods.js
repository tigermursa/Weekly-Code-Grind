/*
Array Methods & Data Transformation:
Given an array of user objects, 
use map, filter, and reduce to compute the total age of all users 
whose names start with the letter “A”.

*/

const users = [
  {
    name: "Ar Bean",
    age: 55,
    location: "England",
  },
  {
    name: "Ar Bean",
    age: 5,
    location: "England",
  },
  {
    name: "Alice",
    age: 30,
    location: "Canada",
  },
  {
    name: "Aaron",
    age: 40,
    location: "USA",
  },
  {
    name: "Aisha",
    age: 27,
    location: "UAE",
  },
  {
    name: "Mr Hank",
    age: 63,
    location: "America",
  },
  {
    name: "Charlie",
    age: 33,
    location: "Germany",
  },
  {
    name: "Diana",
    age: 45,
    location: "Brazil",
  },
];

const allUsers = users.map((user) => user);
const filteredUsers = allUsers.filter(
  (user) => user.name[0].toLocaleLowerCase() === "a"
);

const sumOfAges = filteredUsers.reduce((acc, user) => acc + user.age, 0);

const finalAnswer = `The sum of all user starts with 'A' is ${sumOfAges};`;
console.log(finalAnswer);
