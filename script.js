

// JS CHAPTERS  21-40

// CHAPTER NAME STRING METHOD!

//q1:. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

//ans1
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");

//Q2:. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser


//ANS2:
// let mobileModel = prompt("Enter your favorite mobile phone model:");

// let inputLength = mobileModel.length;
// document.write("Your favorite mobile phone model is: " + mobileModel + "<br>");
// document.write("The length of your input is: " + inputLength);


//Q3:Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//ANS3:
// let word = "Pakistani";
// let indexOfN = word.indexOf("n");
// document.write("The word is: " + word + "<br>");
// document.write("The index of the letter 'n' is: " + indexOfN);

//Q4:Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//ANS4:
// let phrase = "Hello World";
// let lastIndexOfL = phrase.lastIndexOf("l");

// document.write("The string is: " + phrase + "<br>");
// document.write("The last index of the letter 'l' is: " + lastIndexOfL);

//q5:. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser

//ans5:
// let word = "Pakistani";
// let charAtIndex3 = word.charAt(3);
// document.write("The word is: " + word + "<br>");
// document.write("The character at the 3rd index is: " + charAtIndex3);

//Q6:Repeat Q1 using string concat() method.

//ANS6:
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);

// alert("Hello, " + fullName + "! Welcome!");


//Q7:Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

//ANS7:
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("The original word is: " + city + "<br>");
// document.write("After replacement: " + newCity);


//Q8:. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

//ANS8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br><br>");
// document.write("After replacement: " + newMessage);

//Q9:Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

//ANS9:
// let strValue = "472";
// let numValue = Number(strValue);
// document.write("String value: " + strValue + " (Type: " + typeof strValue + ")<br>");
// document.write("Number value: " + numValue + " (Type: " + typeof numValue + ")");

//Q10:Write a program that takes user input. Convert and show the input in capital letters.

//ANS10:
// let userInput = prompt("Enter some text:");
// let upperCaseInput = userInput.toUpperCase();
// document.write("Original input: " + userInput + "<br>");
// document.write("Input in uppercase: " + upperCaseInput);

//Q11:Write a program that takes user input. Convert and show the input in title case.


//ANS11:
// let userInput = prompt("Enter some text:");
// let upperCaseInput = userInput.toTitleCase();
// document.write("Original input: " + userInput + "<br>");
// document.write("Input in uppercase: " + upperCaseInput);


//Q12:Write a program that converts the variable num to string. var num = 35.36 ;
//Remove the dot to display “3536” display in your browser

//ANS12:
// var num = 35.36;
// var numString = num.toString();
// var result = numString.replace(".", "");
// document.write("Original number: " + num + "<br>");
// document.write("After conversion and removing dot: " + result);

//Q13:Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.  For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


//ANS13:
// let username = prompt("Enter a username:");
// if (username.includes('@') || username.includes('.') || username.includes('!') || username.includes(',')) {

//     username = prompt("Invalid username. Please enter a valid username (no special characters like @, ., !):");
// }
// document.write("Valid username: " + username);

//Q14:You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

//ANS14:
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     let userInput = prompt("Enter an item to search for:");
//     let lowerCaseInput = userInput.toLowerCase();
//     let lowerCaseItem1 = A[0].toLowerCase();
//     let lowerCaseItem2 = A[1].toLowerCase();
//     let lowerCaseItem3 = A[2].toLowerCase();
//     let lowerCaseItem4 = A[3].toLowerCase();
//     let lowerCaseItem5 = A[4].toLowerCase();
//     let index = -1;
//     if (lowerCaseItem1 === lowerCaseInput) {
//         index = 0;
//     } else if (lowerCaseItem2 === lowerCaseInput) {
//         index = 1;
//     } else if (lowerCaseItem3 === lowerCaseInput) {
//         index = 2;
//     } else if (lowerCaseItem4 === lowerCaseInput) {
//         index = 3;
//     } else if (lowerCaseItem5 === lowerCaseInput) {
//         index = 4;
//     }
//     if (index !== -1) {
//         alert(userInput + " is available at index " + index + ".");
//     } else {
//         alert(userInput + " is not available in the list.");
//     }


//Q15:Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


//ANS15:
// var password;
//     do {
//         password = prompt("Enter a password (must contain letters and numbers, cannot start with a number, and must be at least 6 characters long):");
    
//         let isValid = true; 
//         if (password.length < 6) {
//             isValid = false;
//             alert("Password must be at least 6 characters long.");
//         }
//         if (!isNaN(password.charAt(0))) {
//             isValid = false;
//             alert("Password cannot start with a number.");
//         }
//         let hasLetter = false;
//         let hasNumber = false;

//         for (let i = 0; i < password.length; i++) {
//             let char = password.charAt(i);
//             if (char >= 'a' && char <= 'z') {
//                 hasLetter = true;
//             }
//             if (char >= 'A' && char <= 'Z') {
//                 hasLetter = true;
//             }
//             if (char >= '0' && char <= '9') {
//                 hasNumber = true;
//             }
//         }

//         if (!hasLetter) {
//             isValid = false;
//             alert("Password must contain at least one letter.");
//         }

//         if (!hasNumber) {
//             isValid = false;
//             alert("Password must contain at least one number.");
//         }

//     } while (!isValid);
//     alert("Password accepted!");

//Q16:Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

//ANS16:
// var university = "University of Karachi";
// var universityArray = [];
// for (var i = 0; i < university.length; i++) {
//     universityArray.push(university.charAt(i)); 
// }
// document.write("Array Elements:<br>");
// for (var j = 0; j < universityArray.length; j++) {
//     document.write(universityArray[j] + "<br>"); 
// }

//Q17:Write a program to display the last character of a user input.

//ANS17:
// var userInput = prompt("Please enter something:");

// if (userInput) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
    
//     document.write("The last character is: " + lastCharacter);
// } else {
//     document.write("No input provided.");
// }

//Q18:You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

//ANS18:
// var text = "The quick brown fox jumps over the lazy dog";
// var lowerCaseText = text.toLowerCase(); 
// var count = 0; 
// var startIndex = 0; 
// while (true) {
//     var index = lowerCaseText.indexOf("the", startIndex);
    
//     if (index === -1) {
//         break;
//     }

//     count++;
//     startIndex = index + 1; 
// }
// document.write("The word 'the' occurs " + count + " times in the given string.");


//                   MATH METHODS

//Q1:. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//ANS1:
// var userInput = prompt("Please enter a positive integer:");

//     var number = parseFloat(userInput);
//     if (number > 0 && !isNaN(number)) {
//         var roundedValue = Math.round(number);
//         var floorValue = Math.floor(number);
//         var ceilValue = Math.ceil(number);

//         document.write("Number: " + number + "<br>");
//         document.write("Rounded Value: " + roundedValue + "<br>");
//         document.write("Floor Value: " + floorValue + "<br>");
//         document.write("Ceil Value: " + ceilValue + "<br>");
//     } else {
//         document.write("Please enter a valid positive integer.");
//     }


//Q2:Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//ANS2:
// var userInput = prompt("Please enter a negative floating point number:");

// var number = parseFloat(userInput);
// if (number < 0 && !isNaN(number)) {
//     var roundedValue = Math.round(number);
//     var floorValue = Math.floor(number);
//     var ceilValue = Math.ceil(number);

//     document.write("Number: " + number + "<br>");
//     document.write("Rounded Value: " + roundedValue + "<br>");
//     document.write("Floor Value: " + floorValue + "<br>");
//     document.write("Ceil Value: " + ceilValue + "<br>");
// } else {
//     document.write("Please enter a valid negative floating point number.");
// }

//Q3:Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//ANS3:
// var userInput = prompt("Please enter a number:");
//     var number = parseFloat(userInput);
//     if (!isNaN(number)) {
//         var absoluteValue;

//         if (number < 0) {
//             absoluteValue = -number; 
//         } else {
//             absoluteValue = number; 
//         }
//         document.write("Absolute value of " + number + " is " + absoluteValue);
//     } else {
//         document.write("Please enter a valid number.");
//     }


//Q4:Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

//ANS4:
// var diceValue = Math.floor(Math.random() * 6) + 1; 
// document.write("You rolled a " + diceValue);

//Q5:. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


//ANS5:
// var randomValue = Math.random(); 
// var coinToss;
// if (randomValue < 0.5) {
//     coinToss = "Heads";
// } else {
//     coinToss = "Tails";
// }
// document.write("Coin Toss Result: " + coinToss);


//Q6:Write a program that shows a random number between 1 and 100 in your browser.

//ANS6:
// var randomNumber = Math.floor(Math.random() * 100) + 1; 
// document.write("Random Number: " + randomNumber);


//Q7:Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//ANS7:
// var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kg");
// } else {
//     document.write("Please enter a valid weight.");
// }


//Q8:Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

//ANS8:
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userInput === secretNumber) {
//     document.write("Congratulations! You guessed the correct number: " + secretNumber);
// } else {
//     document.write("Sorry, the correct number was: " + secretNumber);
// }

//                                    CHAPTER  31 -34

//Q1:Write a program that displays current date and time in  your browser. 

// //ANS1:
// document.write(new Date());

//q2:. Write a program that alerts the current month in words. For example December. 
//ans2
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = new Date().getMonth();
// alert(monthNames[currentMonth]);

//q3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 
//ans3
// let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let currentDay = new Date().getDay();
// alert(dayNames[currentDay]);

//q4: Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
//ans4:

// let today = new Date().getDay();
// if (today === 0 || today === 6) {
//   alert("It’s Fun day");
// }

//q5:. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
//else shows “Last days of the month”. 
//ans5
// let currentDate = new Date().getDate();
// if (currentDate < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


//q6: Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
//'t been declared beforehand. Use any variable you like to represent the Date object. 
//ans6:
// let minutesSince1970 = Math.floor(Date.now() / (1000 * 60));
// alert("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);


//q7: Write a program that tests whether it's before noon and  alert “Its AM” else “its PM”. 
//ans7:
// let hours = new Date().getHours();
// if (hours < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }

//q8:Write a program that creates a Date object for the last day  of the last month of 2020 and assigns it to variable named laterDate. 
//ans8
// let laterDate = new Date(2020, 11, 31); 
// alert("Last day of the last month of 2020: " + laterDate);

//q9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
//ans9:
// let ramadanStart = new Date(2015, 5, 18); 
// let today = new Date();
// let daysPassed = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
// alert("Days since 1st Ramadan (June 18, 2015): " + daysPassed);

//q10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
//ans:10
// let referenceDate = new Date();
// let startOf2015 = new Date(2015, 0, 1); 
// let secondsElapsed = Math.floor((referenceDate - startOf2015) / 1000);
// document.write("Seconds elapsed between Jan 1, 2015, and the reference date: " + secondsElapsed);


// q11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 
//ans11:
// let currentDate = new Date();
// let hours = currentDate.getHours();
// currentDate.setHours(hours + 1);
// document.write("Date and time an hour ahead: " + currentDate);


// q12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back? 
//ans12
// let date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// alert("Date 100 years back: " + date);


// q13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 
//ans13:
// let age = prompt("Enter your age:");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);


// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month

//ans14:
// let customerName = "John Doe";
// let currentMonth = new Date().toLocaleString('default', { month: 'long' });
// let numberOfUnits = 350;
// let chargesPerUnit = 20;
// let netAmountPayable = numberOfUnits * chargesPerUnit;
// let latePaymentSurcharge = 150;
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + currentMonth + "<br>");
// document.write("Number of Units: " + numberOfUnits.toFixed(2) + "<br>");
// document.write("Charges per Unit: " + chargesPerUnit.toFixed(2) + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2));


//                    CHAPTER  35 -38

// q1: Write a function that displays current date & time in your browser. 
//ans1:
// function displayDateTime() {
//     let now = new Date();
//     document.write("Current Date and Time: " + now);
//   }
//   displayDateTime();
// 2. Write a function that takes first & last name and then it  greets the user using his full name. 
//ans2:
// function greetUser(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
//   }
//   greetUser("ayesha", "usman");
  

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
//ans3:
// function addNumbers() {
//     let num1 = +prompt("Enter the first number:");
//     let num2 = +prompt("Enter the second number:");
//     let sum = num1 + num2;
//     return sum;
//   }
//   alert("The sum is: " + addNumbers());
  

// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 
//ans4:
// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       case '%':
//         result = num1 % num2;
//         break;
//       default:
//         result = "Invalid operator";
//     }
//     document.write("Result: " + result);
//   }
//   calculator(10, 5, '+'); 
  

// 5. Write a function that squares its argument. 
//ans5:
// function square(number) {
//     return number * number;
//   }
//   alert("Square of 5 is: " + square(5)); 
  

// 6. Write a function that computes factorial of a number. 

//ans6
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
//   }
//   alert("Factorial of 5 is: " + factorial(5)); 
  

// 7. Write a function that take start and end number as inputs & display counting in your browser. 
//ans7:
// function displayCounting(start, end) {
//     let result = "";
//     for (let i = start; i <= end; i++) {
//       result += i + " ";
//     }
//     document.write("Counting: " + result);
//   }
//   displayCounting(1, 10); 
  


// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 

//ans8:
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse;
//   }
//   alert("Hypotenuse is: " + calculateHypotenuse(3, 4)); 

//q9:Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 

//ans9:
// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   let areaFromValues = calculateRectangleArea(5, 10);
//   document.write("Area with values: " + areaFromValues); 
  
  

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 

//ans10:
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     let reversedStr = cleanedStr.split('').reverse().join('');
//     return cleanedStr === reversedStr;
//   }
// document.write(isPalindrome("madam")); 
//  document.write(isPalindrome("hello")); 

//q11:Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 
// '

//ans:11
// function capitalizeFirstLetterOfEachWord(string) {
//     let words = string.split(' ');
//     let result = '';
  
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];
//       let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       result += capitalizedWord;
      
//       if (i < words.length - 1) {
//         result += ' ';
//       }
//     }
    
//     return result;
//   }
  
//   console.log(capitalizeFirstLetterOfEachWord('the quick brown fox'));

  

//q12: Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development

//ams12:
// function findLongestWord(string) {
//     let words = string.split(' ');
//     let longestWord = '';
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
    
//     return longestWord;
//   }
//   console.log(findLongestWord('Web Development Tutorial'));

//q13:Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  
// Sample arguments : 'JSResourceS.com', 'o'  


//ans13:
// function countLetterOccurrences(string, letter) {
//     let count = 0;
    
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === letter) {
//         count++;
//       }
//     }
    
//     return count;
//   }
  
//   // Example usage
//  document.write(countLetterOccurrences('JSResourceS.com', 'o')); 
  
  
  


//q14:14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Circumference of circle    =     2πr 
// Area of circle       
// =     
// πr2

//ans14:
// function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     console.log("The area is " + area.toFixed(2));
//   }
  
//   calcArea(5);
 
    //                         CHAPTER 38 -42


//Q1:Write a custom function power ( a, b ), to calculate the value of a raised to b. 
 //ans1:
//  function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//       result *= a;
//     }
//     return result;
//   }
  
// document.write(power(2, 3)); 
  

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not. 
// Leap years ..., 2012, 2016, 2020, … 
//ans2:

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
//   }
//   console.log(isLeapYear(2024));
//   console.log(isLeapYear(2023)); 
  

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 
//ans3:
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
//   }
  
//   function calculateTriangleArea(a, b, c) {
//     let s = calculateS(a, b, c);
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }
  
//   console.log(calculateTriangleArea(3, 4, 5)); 
  


// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these 
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction. 
//ans4:
// function calculateAverage(marks) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
//   }
  
//   function calculatePercentage(marks) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / (marks.length * 100)) * 100;
//   }
  
//   function mainFunction(marks) {
//     let average = calculateAverage(marks);
//     let percentage = calculatePercentage(marks);
  
//     console.log("Average:", average);
//     console.log("Percentage:", percentage + "%");
//   }
  
//   mainFunction([75, 80, 90]); 
  

 
// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 
//ans5:
// function customIndexOf(string, char) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  

//   console.log(customIndexOf("JavaScript", "S")); 
//   console.log(customIndexOf("JavaScript", "z")); 
  

 
// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 
//ans6:

// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
//   }
  
//   console.log(removeVowels("Hello World")); 
  

 
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
//ans7:
// function countSuccessiveVowels(sentence) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";
  
//     for (let i = 0; i < sentence.length - 1; i++) {
//       let currentChar = sentence[i];
//       let nextChar = sentence[i + 1];
  
//       switch (currentChar) {
//         case 'a': case 'e': case 'i': case 'o': case 'u':
//         case 'A': case 'E': case 'I': case 'O': case 'U':
//           if (vowels.includes(nextChar)) {
//             count++;
//           }
//           break;
//       }
//     }
  
//     return count;
//   }

//   console.log(countSuccessiveVowels("Pleased to meet you")); 

//q8: The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters. 
//ans8:

// function convertToMeters(distanceKm) {
//     return distanceKm * 1000;
//   }
  
//   function convertToFeet(distanceKm) {
//     return distanceKm * 3280.84;
//   }
  
//   // Function to convert kilometers to inches
//   function convertToInches(distanceKm) {
//     return distanceKm * 39370.1;
//   }
  
//   // Function to convert kilometers to centimeters
//   function convertToCentimeters(distanceKm) {
//     return distanceKm * 100000;
//   }
  

//   let distanceKm = 5; 
//   console.log("Distance in meters:", convertToMeters(distanceKm));
//   console.log("Distance in feet:", convertToFeet(distanceKm));
//   console.log("Distance in inches:", convertToInches(distanceKm));
//   console.log("Distance in centimeters:", convertToCentimeters(distanceKm));
  

//q9:9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour. 
  
//ans9:
// function calculateOvertimePay(hoursWorked) {
//     let overtimeHours = hoursWorked - 40;
//     let overtimePay = 0;
  
//     if (overtimeHours > 0) {
//       overtimePay = overtimeHours * 12;
//     }
  
//     return overtimePay;
//   }
  
//   let hoursWorked = 45; 
//   console.log("Overtime Pay: Rs.", calculateOvertimePay(hoursWorked)); 
  

//q10:10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.


//ans10:
// function calculateCurrencyNotes(amount) {
//     let hundreds = Math.floor(amount / 100);
//     amount %= 100;
  
//     let fifties = Math.floor(amount / 50);
//     amount %= 50;
  
//     let tens = Math.floor(amount / 10);
    
//     return { hundreds, fifties, tens };
//   }
  

//   let amount = 880; 
//   let notes = calculateCurrencyNotes(amount);
//   console.log("100s:", notes.hundreds);
//   console.log("50s:", notes.fifties);
//   console.log("10s:", notes.tens);
  

  

  
