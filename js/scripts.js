// BUSINESS LOGIC
const beep = "beep!"
const boop = "boop!"
const neighbor = "Won't you be my neighbor?"


function numberPrinter(number) {
  let numberList = [];
  for (let currentNumber = 0; currentNumber <= number; currentNumber ++) {
    numberList.push(currentNumber.toString());
  };

  const newList = numberList.map(function(number) {
    if (number.includes('3')) {
      return neighbor;
    } else if (number.includes('2')) {
      return boop;
    } else if (number.includes('1')) {
      return beep;
    } else {
      return number;
    };
  });
  return newList;
};


// UI LOGIC

$(document).ready(function () {
  $('form#input').submit(function (event) {
    event.preventDefault();
    const number = $('#number').val();
    let result = numberPrinter(number);
    $('#results').empty();
    result.forEach(function(number) {
      $('#results').append('<p>' + number + '</p>');
      });
  });
});