NUMBERS_BASE_URL = 'http://numbersapi.com/';
CARDS_BASE_URL = 'http://deckofcardsapi.com/';

favNum = 5;
favNums = [5, 10, 15, 20];

// 1.
// $.getJSON(`${NUMBERS_BASE_URL}${favNum}/trivia?json`).then((response) => {
//   console.log(response);
// });

// Refactoring to do without jQuery for practice
fetch(`${NUMBERS_BASE_URL}${favNum}/trivia?json`)
  .then((response) => response.json())
  .then((data) => console.log(data.text));

// 2.
// $.getJSON(`${NUMBERS_BASE_URL}${favNums}/trivia?json`).then((response) => {
//   console.log(response);
// });

// Refactoring to do without jQuery for practice
fetch(`${NUMBERS_BASE_URL}${favNums}/trivia?json`)
  .then((response) => response.json())
  .then((response) => console.log(response));

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${NUMBERS_BASE_URL}${favNum}?json`);
  })
).then((response) => {
  response.forEach((data) => $('body').append(`<p>${data.text}</p>`));
});

// * Trying with to do without jQuery
// ? Not sure how to extract text.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return fetch(`${NUMBERS_BASE_URL}${favNum}?json`);
//   })
// ).then((response) => {
//   response.forEach((data) => $('body').append(`<p>${data}</p>`));
// });

// * syntax practice when using fetch
// fetch('http://numbersapi.com/5')
//   .then((response) => response.json())
//   .then((data) => console.log(data.text));

// * MDN fetch API DOCUMENTATION example
// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
