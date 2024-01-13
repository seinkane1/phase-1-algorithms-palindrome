function isPalindrome(string) {
    const lowercaseString = string.toLowerCase();
    const lettersOnlyString = lowercaseString.replace(/[^a-z]/g, '');
  
    let left = 0;
    let right = lettersOnlyString.length - 1;
  
    while (left <= right) {
      if (lettersOnlyString[left] !== lettersOnlyString[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
