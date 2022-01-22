// BUSINESS LOGIC
const beep = "beep!"
const boop = "boop!"
const neighbor = "Won't you be my neighbor?"



function numberPrinter(number) {
  let numberList = [];
  for (let currentNumber = 0; currentNumber <= number; currentNumber ++) {
    numberList.push(currentNumber.toString());
    console.log(numberList)
  };

  const numberPrinter = numberList.map(function(number) {
    if (number.includes('1')) {
      return number = beep;
    } else {
      return number;
    };
  });
  return numberList;
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
      console.log(number)
      });
  });
});