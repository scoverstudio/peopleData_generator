const fs = require("fs");
const { stringify } = require("querystring");

const gender = ["M", "F"];
const maleNames = ["Krystian", "Marek", "Wojtek"];
const femaleNames = ["Kasia", "Wiktoria", "Daria"];
const lastNames = ["Matkowski", "Witkowski", "Dabrowski"];

const randChoice = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

const people = [];

for (let i = 0; i <= 20; i++) {
  const peopleObject = {};
  peopleObject.gender = randChoice(gender);

  if (peopleObject.gender === "M") {
    peopleObject.name = randChoice(maleNames);
    peopleObject.email = `${randChoice(maleNames).toLowerCase()}.${randChoice(
      lastNames
    ).toLowerCase()}@gmail.com`;
  } else {
    peopleObject.name = randChoice(femaleNames);
    peopleObject.email = `${randChoice(femaleNames).toLowerCase()}.${randChoice(
      lastNames
    ).toLowerCase()}@gmail.com`;
  }

  peopleObject.lastName = randChoice(lastNames);
  peopleObject.age = Math.floor(Math.random() * 61) + 18;

  people.push(peopleObject);
}

const myJsonString = JSON.stringify(people);

fs.writeFile("people.json", myJsonString, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
