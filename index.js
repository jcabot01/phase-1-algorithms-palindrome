//step #1
const stripNonAlphaNum = (value) => {
  let str
  switch(typeof value) {
    case "string":
      str = value;
      break;
  }
if (str === null || str === undefined) {
  return null;
}else if (str.length === 0){
  return '';
}else {
  let newStr = value.toLowerCase().replace(/[\W_ ]/g, "") // = /find globally/g, [\W_ ] match any-non word character, "" replace with empty string
  return newStr;
}
}

function isPalindrome(value) {
  // Write your algorithm here
  let str = stripNonAlphaNum(value); 
  if(str === null) return false;
  return str.split('').reverse().join('') === str;
}


/* 
  Add your pseudocode here
    Notes:
      We are to write a function that takes in a string.  Result will be boolean
      We are to determine if it is a palindrome. Palindromes can include alphaNumeric characters, JavaScript does not read it with those embedded, so...
      There are 3 ways to solve; reverse method, for loop, recursion
      We need to remove all non-alphanumeric characters.  If there is a capital letter, we need to convert everything to lowerCase().
      Ways to solve this; use JS split,reverse,join methods

      step #1 stripNonAlphaNum  --whittle string down into something we can use by stripping out non-letters, and convert to lowercase
        We can do a quick switchcase (typeof value) to make sure it's a string

        if the string is null or string is underfined
          return null
        else if the string.length === 0
          return ""
        else 
          let the new string = the old string, in all lowercase(), and replace() all special characters (/[\W_ ]/g, "");
          return new string
  
      step#2  fctn isPalindrome  -- pull in the result of the stripNonAlphaNum function and assign it to the str variable.  
        The last part of the function performs 3 things; a return of the Palindrome function, the split, reverse, join of the string, and determine if str(reversed) = str    

*/

/*
  Add written explanation of your solution here

  #1  I wanted to build a helper function intially strip out any of the non-alpha numeric characters so that I could run a split.reverse.join method on the string.  So step #1 was to convert all letters
  to lowerCase, then replace all non-alpha numeric characters with an empty string "".

  #2  I was able to use main Palindrome function to compare the modified/stripped out/reversed input, with the original input.  The final return we were able to run a boolean 
  to determine if the original string was a palindrome.


  Way to Optimize:
  I could cut out the 'if' statements since we know the input value is a string.  Having the 'if' statements makes it more robust when don't know the typeof input values.
  
  
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
