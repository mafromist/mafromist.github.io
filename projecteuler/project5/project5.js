/* Problem 5: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

x % 0 == 0 && 
x % 1 == 0 && 
x % 2 == 0 && 
x % 3 == 0 && 
x % 4 == 0 && 
x % 5 == 0 && 
x % 6 == 0 && 
x % 7 == 0 && 
x % 8 == 0 && 
x % 9 == 0 && 
x % 10 == 0

x is smallest positive number of this rule is applicable
*/

const isDivisible = (num) => {
    for(i = 1; i < 20; i++){
        if(num % i === 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

let num = 1;
do {
    num++;
} while (! isDivisible(num));

console.log(num);

