function isPalindrome(word) {
  // Write your algorithm here
  let splitStr = word.split('');
  let reverseStr = splitStr.reverse();
  let backwardsWord = reverseStr.join('');

  if (word === backwardsWord) {
    return true;
  } else {
    return false;
  }
}

/* 
write code that verifies if a word reads the same forwards and backwards.
  initialize a variable that splits the word into an array
  initialize a variable that reverses the split array
  initialize a variable that joins the reversed split array
  
  
display true or false dependant on the return.
  if word === backwards word
    display true
  if not
    display false
*/

/*
  The process of reversing the word involves the .split(), .reverse(), and .join()
  methods. The if else block verifies the word passed into the function agianst 
  the value of the reverseWord variable to determine if they are the same.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
