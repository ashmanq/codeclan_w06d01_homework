// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted result is 'The murderer is Miss Scarlet'
// const goes into declareMurderer functon as the function
// sits inside the const block scope.

// Result matches estimated result

// Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted result is 'The murderer is Professor Plum'
// verdict constant gets result of declareMurderer which itself takes in
// murderer const. declareMurderer function sits in murderer block scope.

// Result different from prediction. Result gives error due to the attempt
// to reassign murderer constant in changeMurderer function. I didn't realise
// this was the same variable.

// Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Predicted result is:
// 'First Verdict: The murderer is Mrs. Peacock'
// 'Second Verdict: The murderer is Professor Plum'
// The first verdict overwrites murderer with new let
// in the function scope.
// The second verdict sits outside scope of declareMurder block and
// therefore the Professor Plum murderer let is used.

// Result matches predicted result

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Predicted result is:
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs. Peacock
// The first log uses declareAllSuspects function which overwrites
// third suspects name with Colonel Mustard.
// The second log sits outside declareAllSuspects block scope and so
// uses the Mrs. Peacock constant when referring to suspectThree
// variable.

// Result matched prediction.

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Predicted result is:
// The weapon is the Revolver
// changeWeapon function is called first which modifies the scenario
// const (this is allowed). Verdict constant is then console logged
// which refers to the modified object when declaring the weapon.
// Both functions sit within the block scope of the scenario object.

// Result matched expected result.

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted result is:
// The murderer is Mrs. White
// murderer is initialised as Colonel Mustard
// changeMurderer function is called which changes
// murderer first to Mr. Green then to Mr. White from
// the plotTwist function declaration within the changeMurderer
// function. All functions sit within the murderer block scope.

//Result matched predicted result.

// Episode 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Predicted result is:
// The murderer is Miss Scarlet

// Result differed from expectation
// I thought that the murderer change within
// the unexpectedOutcome function would overwrite the
// Mr. Green allocation to the murderer variable.
// I didn't realise that this only changed the murderer variable
// that was within the plotTwise function and didnt affect the
// murderer variable thats scope covered the whole code.

// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';// no change
//   scenario.room = 'Dining Room';// changed to dining room
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';// room is dining room therefore new murderer allocated
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) { // this is true
//         scenario.weapon = 'Candle Stick'; //because its true the weapon changes
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Predicted result is:
// The weapon is Candle Stick
// scenario.room is changed to Dining Room when changeScenario is called.
// plotTwist function is run within changeScenario and checks if
// Dining Room is the room, which it now is. Then unexpectedOutcome is run
// from within plotTwist function checking if Colonel Mustard is the murderer
// which he now is. The weapon is then changed to Candle Stick. The scenario
// const objects scope covers all the code and so there isn't any scope issues.
// also you're allowed to change values from within a const object.

// Result matched expected result.

// Episode 9

let murderer = 'Professor Plum'; // Initial value

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock'; //No effect - variable only scoped to within this function
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`; // Takes initial let murderer value as this is in it's scope
}

const verdict = declareMurderer();
console.log(verdict);

// Predicted result:
// The murderer is Professor Plum
// The if statement creates a new, and different, murderer variable
// who's scope sits only in the if statement because it's declared with let
// When verdict is allocated the result of declareMurderer it just takes the
// initial murderer value of Professor plum.

// Result matched predicted result.
