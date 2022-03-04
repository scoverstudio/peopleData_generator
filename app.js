const fs = require("fs");
const { stringify } = require("querystring");

const genderMale = "M";
const genderFemale = "F";
const gender = [genderMale, genderFemale];
const domains = ["gmail", "yahoo"]
const maleNames = ["Krystian", "Marek", "Wojtek"];
const femaleNames = ["Kasia", "Wiktoria", "Daria"];
const lastNames = ["Matkowski", "Witkowski", "Dabrowski"];
let people = [];

const randChoice = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

const generatePersonData = (records) => {
  for (let i = 0; i < records; i++) {
    const personObject = {};
    personObject.gender = randChoice(gender);

    if (personObject.gender === genderMale) {
      personObject.name = randChoice(maleNames);
      personObject.lastName = randChoice(lastNames);
    } else {
      personObject.name = randChoice(femaleNames);
      personObject.lastName = randChoice(lastNames).replace(/i$/, "a");
    }
    personObject.email =
      `${personObject.name}.${personObject.lastName}@${randChoice(domains)}.com`.toLowerCase();
    personObject.age = Math.floor(Math.random() * 61) + 18;

    people.push(personObject);
  }
}

const generateRecords = (records) => {
  generatePersonData(records)
  return people;
}

people = generateRecords(20);

const myJsonString = JSON.stringify(people);

fs.writeFile("people.json", myJsonString, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
