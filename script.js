"use strict"

var heroes = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];

console.log(heroes[0]);
console.log(heroes[heroes.length-1]);

var hero_number = prompt("Įveskite skaičių nuo 1 iki 6")

console.log(heroes[hero_number - 1])