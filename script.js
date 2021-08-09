// slice
function slice(){
    let foods = [pizza, burger, fingerShips, donuts, springRoll];
    let modifiedFood = foods.slice(1,4);
    return modifiedFood;
    // console.log(modifiedFood);
}

// splice
function splice(){
    let foods = [pizza, burger, fingerShips, donuts, springRoll];
    let modifiedFood = foods.splice(2, 0, noodles, icecream );
    return modifiedFood;
    // console.log(modifiedFood);
}
// filter
// evennumber
const numberArray = [12,324,213,4,2,3,45,4234];
    let evennum = numberArray.filter(function (isEven){
        return isEven&0;
});
console.log(evennum);

// primenumber
const numberArray = [12,324,213,4,2,3,45,4234];
    const isPrime = n => {
     for (let i = 2; i < n; i++){

      if (n % i === 0) return false;{
     return n > 1;
      }
    }
    return numberArray.filter(n => isPrime(n));
   }


// non primenumber
const numberArray = [12,324,213,4,2,3,45,4234];
const nonPrime = n => {
    for (let i = 2; i < n; i++){

     if (n % i === 1) return false;{
    return n > 1;
     }
   }
   return numberArray.filter(n => nonPrime(n));
  }



// lambda evennumber
const numberArray = [12,324,213,4,2,3,45,4234];
const evennum = numberArray.filter(item => item % 2 === 0);
return evennum;
// console.log(evennum);

// map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
  const squarenumber = myArray.map(item => item * 2);
  return squarenumber;
}
console.log(squarenumber);

//  reduce
const myArray = [2, 3, 5, 10];
function multiply(myArray){
let multinum = myArray.reduce((initial,item) => initial + item, 0)
}
console.log(multinum);


// function isPrime(numberArray)
// {
// let primes=numberArray.filter(function(number)
// {
// for (var i=2;i<number;i++)
// {
// return number%i!=0;
// }
// });
// return primes;
// }
// console.log(isPrime(numberArray));