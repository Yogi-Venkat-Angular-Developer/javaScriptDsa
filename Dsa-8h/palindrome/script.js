// palindrome Question 
// we need last digit of x  by doing reinder ;
// then add to reverse 
// then remove from the copy 

function palindrome(x){
  let copyNum = x , reverseNum = 0;
  while(copyNum > 0){
    const lastDigit = copyNum % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum /10)
  }
  return x == reverseNum
};

console.log(palindrome(121));
console.log(palindrome(234));
