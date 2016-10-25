var result = [];
var suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
var numbers = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

var calculate = function() {
  for (var index = 0; index < suits.length; index++) {
    numbers.forEach(function(number) {
      result.push(number + " of " + suits[index]);
    });
  };
  alert(result);
};

$(document).ready(function(event) {
  $('button#submit').click(calculate());
  event.preventDefault();
});
