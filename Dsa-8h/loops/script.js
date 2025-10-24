// Find the sum of the given num 
//  example : given num 5 = 1 + 2 + 3 + 4 + 5 = ?

function findSumOfNum(num){
  let sum = 0;
  for(let i = 1 ; i <= num ; i++){
    sum = sum + i
  }
  return sum 
};

console.log(findSumOfNum(5));

//findout the sumof digits of the numbers;

// eg: 2341 = 10;

function findSumDigits(digit){
  let sum = 0;
  while(digit > 0){
    sum = sum + digit % 10;
    digit = Math.floor(digit /10)
  }
  return sum
};

console.log(findSumDigits(2090));

//findout the count of the given number ;
// eg : num = 8999 = 4;

function findCount(num){
  num = Math.abs(num); // Absolute value like avoiding of the minus 
  let count = 0;
  do{
    count++
    num = Math.floor(num / 10)
  }while(num > 0)
    return count
};

console.log(findCount(245667));
