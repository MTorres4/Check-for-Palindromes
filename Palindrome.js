"use strict";
function testPalindrome(testSubject) {
//function to test string as a palindrome and it should ignore spaces/punctuation	
	var testSubject = prompt("Enter your word or phrase to be tested");
	var pal = /[^A-Za-z0-9]/g;
	var lowerCase = testSubject.toLowerCase().replace(pal, '');
	var reverseCase = lowerCase.split('').reverse().join('');
	if (lowerCase === reverseCase)
	{
		console.log("True"); 
		alert("True, great choice!");
		tryAgain();
//if yes, an alert for true
	}else {
		console.log("False");
		alert("That one does not work");
		tryAgain();
//if no, an alert for false
	}
}

function tryAgain() {
	var searchType = prompt("Try Again? Enter 'yes' or 'no'").toLowerCase();
  switch(searchType){
	case 'yes':
		testPalindrome();
      break;
    case 'no':
	return;
      break;
    default:
      alert("Please enter 'yes' or 'no'.");
	  tryAgain();
      break;
  }
}


testPalindrome();

//works with testing "Hannah" for true within js
//works with testing "Hanna" for false within js
//works with adding prompt for user to enter word or phrase
//checked by Nick 9:44am 2.1.2017
