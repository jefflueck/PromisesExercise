NUMBERS_BASE_URL = 'http://numbersapi.com/';
CARDS_BASE_URL = 'http://deckofcardsapi.com/';

favNum = 5;
favNums = [5, 10, 15, 20];

// 1.
// $.getJSON(`${NUMBERS_BASE_URL}${favNum}/trivia?json`).then((response) => {
//   console.log(response);
// });
// Refactoring to do without jQuery for practice
// fetch(`${NUMBERS_BASE_URL}${favNum}/trivia?json`)
//   .then((response) => response.json())
//   .then((data) => console.log(data.text));

// 2.
// $.getJSON(`${NUMBERS_BASE_URL}${favNums}/trivia?json`).then((response) => {
//   console.log(response);
// });

// Refactoring to do without jQuery for practice
// fetch(`${NUMBERS_BASE_URL}${favNums}/trivia?json`)
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// 3.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${NUMBERS_BASE_URL}${favNum}?json`);
//   })
// ).then((response) => {
//   response.forEach((data) => $('body').append(`<p>${data.text}</p>`));
// });

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

// ! Using async/await to refactor for 2nd part of the exercise
// 1.
async function getTrivia() {
  const response = await fetch(`${NUMBERS_BASE_URL}${favNum}/trivia?json`);
  const data = response.json();
  console.log(data);
}
getTrivia();
// 2.
async function getTriviaAll() {
  const facts = await fetch(`${NUMBERS_BASE_URL}${favNums}/trivia?json`);
  const data = await facts.json();
  console.log(data);
}
getTriviaAll();

// 3.
// ? Not sure how to fix this.
async function getTriviaAllPromiseAll() {
  const facts = await Promise.all(
    Array.from({ length: 4 }, () => {
      let data = fetch(`${NUMBERS_BASE_URL}${favNum}/trivia?json`);
      return data;
    })
  );
  data.forEach((data) => $('body').append(`<p>${data}</p>`));
}

getTriviaAllPromiseAll();

// 3. Solution
// async function part3() {
//   let facts = await Promise.all(
//     Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
//   );
//   facts.forEach((data) => {
//     $('body').append(`<p>${data.text}</p>`);
//   });
// }
// part3();
