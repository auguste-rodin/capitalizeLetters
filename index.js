// Capitilize Letters.
// Return a string with the first letter of every word capitilized.
// ex. capitilizeLetters('i love javascript') === 'I Love Javascript'

// You basically need to scan for a gap and each time there is a gap return the next letter with an upperCase letter.

// One way is to use a 'for' loop.

// Space is placed between the characters so that it looks for the gap between words instead of characters. 

/*
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ');

  for(let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(' ');
}

const output = capitalizeLetters('i love javascript very much');  

console.log(output);  */

// This method turns a string into all lower-case letters before changing the string into an array. The for loop lets i = 0 then as long as i is less than the length of the string array it will increment until it does. 

//Inside the for loop you take the string array index '[i]' and set it equal to the string array index .substring. The javascript .substring method allows a specific point within the string to be accessed within its argument(). The (0, 1) means it picks up first letter of each word. If the space between the quotation didn't exist it would capitilize every letter. 

// using .map is another useful and more impressive method than a standard for loop. 

/*
function capitalizeLetters(str) {
  
  return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
}

const output = capitalizeLetters('i love javascript very much');  

console.log(output); */

// you can clean the method up with es6

/*
function capitalizeLetters(str) {
  
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

const output = capitalizeLetters('i love javascript very much');  

console.log(output);  */

// This way removes the function and the curly braces. You could even remove the parameter around (word) because it's only returning a single argument. 

// There is also a solution which uses regular expressions.

function capitalizeLetters(str) {
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}


const output = capitalizeLetters('i love javascript very much');  

console.log(output);

// The .map method with es6 will be considered the cleanest method for interview purposes, however you should be able to demonstrate all the methods and explain the choices made beyond syntax

