// Business Logic

const conversions = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I",
}

//const romanNumeral = conversions[numberValue];

function convertOnes(number) {
  return "V";
};
function convertTens(number) {
  return "L";
};
function convertHundreds(number) {
  return "D";
};
function convertThousands(number) {
  return "M";
};


function convertToRomanNumeral(number) {
  let output = [];
  console.log(number);
  if (number >= 1) {
    const convertedNumber = convertOnes(number);
    output.push(convertedNumber);
    if (number >= 10) {
      const convertedNumber = convertTens(number);
      output.push(convertedNumber);
      if (number >= 100) {
        const convertedNumber = convertHundreds(number);
        output.push(convertedNumber);
        if (number >= 1000) {
          const convertedNumber = convertThousands(number);
          output.push(convertedNumber);
        }
      }
    }
    output = output.reverse();
    output = output.join(" ");
  } 
  return output;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#userInput").val());
    console.log(convertToRomanNumeral(number));
  });
});