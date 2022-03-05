const fs = require("fs");

const genderMale = "M";
const genderFemale = "F";
const gender = [genderMale, genderFemale];
const domains = ["gmail.com", "yahoo.com", "wp.pl"]
const maleNames = ["Krystian", "Marek", "Wojtek"];
const femaleNames = ["Kasia", "Wiktoria", "Daria"];
const lastNames = ["Matkowski", "Witkowski", "Dabrowski"];

const randChoice = (arr) => {
  const randomItem = arr[Math.floor(Math.random() * arr.length)];
  return randomItem;
};

const generatePersonData = () => {
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
    `${personObject.name}.${personObject.lastName}@${randChoice(domains)}`.toLowerCase();
  personObject.age = Math.floor(Math.random() * 61) + 18;

  return personObject;
}

const generateRecords = (length) => Array.from({ length }, generatePersonData);

const people = generateRecords(20);

const myJsonString = JSON.stringify(people);

fs.writeFile("people.json", myJsonString, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
