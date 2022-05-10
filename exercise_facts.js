NUMBERS_BASE_URL = 'http://numbersapi.com/';
CARDS_BASE_URL = 'http://deckofcardsapi.com/';

favNum = 5;
favNums = [5, 10, 15, 20];

// 1.
$.getJSON(`${NUMBERS_BASE_URL}${favNum}/trivia?json`).then((response) => {
  console.log(response);
});

// 2.
$.getJSON(`${NUMBERS_BASE_URL}${favNums}/trivia?json`).then((response) => {
  console.log(response);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${NUMBERS_BASE_URL}${favNum}?json`);
  })
).then((response) => {
  response.forEach((data) => $('body').append(`<p>${data.text}</p>`));
});
