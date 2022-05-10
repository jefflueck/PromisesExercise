CARDS_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

// Card API Part Two
// 1.
$.getJSON(`${CARDS_BASE_URL}new/draw`).then((data) => {
  let { suit, value } = data.cards[0];
  console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

// 2.
let cardOne = null;
$.getJSON(`${CARDS_BASE_URL}new/draw`)
  .then((data) => {
    cardOne = data.cards[0];
    let newDeck = data.deck_id;
    return $.getJSON(`${CARDS_BASE_URL}${newDeck}/draw/`);
  })
  .then((data) => {
    let cardTwo = data.cards[0];
    [cardOne, cardTwo].forEach((card) => {
      console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
    });
  });

// 3.
let newDeck = null;
let $btn = $('button');
let $cards = $('#cards');

$.getJSON(`${CARDS_BASE_URL}new/shuffle/`).then((data) => {
  newDeck = data.deck_id;
  $btn.show();
});
$btn.on('click', function () {
  $.getJSON(`${CARDS_BASE_URL}${newDeck}/draw/`).then((data) => {
    let cardSrc = data.cards[0].image;
    $cards.append(`<img src="${cardSrc}">`);
  });
  if (data.remaining === 0) {
    $btn.hide();
  }
});
