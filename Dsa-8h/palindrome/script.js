// palindrome Question 
// we need last digit of x  by doing reinder ;
// then add to reverse 
// then remove from the copy 

function palindrome(x){
  x = Math.abs(x);
  let copyX = x;
  let reverseX = 0;
  for(let i = 0 ; i <= copyX ; i++){
    reverseX += copyX % 10;
    copyX = copyX /10
  }
  return x === reverseX
};

console.log(palindrome(121));
