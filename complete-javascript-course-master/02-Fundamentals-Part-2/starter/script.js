'use strict';

// function fruitCutter(fruit){
// return fruit *4;
// }

// function fruitProcessor (aples, oranges) {
//     let aplePieces = fruitCutter(aples);
//     let orangePieces = fruitCutter(oranges);
//     let juice = `The juice contains ${aplePieces} aples and ${orangePieces} oranges`
//     return juice;

// }
// let tastyJuice = fruitProcessor(5,8);
// console.log(tastyJuice)

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetierement = function(birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retierement = 65 - age;
//     return `${firstName} retires in ${retierement} years`;
// }

// console.log(yearsUntilRetierement(1991, 'Jonas'))

/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 
Your tasks:  
1.	Create an arrow function 'calcAverage' to calculate the average of 3 scores
2.	Use the function to calculate the average for both teams
3.	Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the 
victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
4.	Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5.	Ignore draws this time
Test data
§	Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§	Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints
§	To calculate average of 3 values, add them all together and divide by 3
§	To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

// const calcAverage = (num1, num2, num3) => {
//     return (num1 + num2 + num3) / 3
// }

// // const dolphinsAverage = calcAverage(44, 23, 71)
// // const koalasAverage = calcAverage(65,54,49)

// const dolphinsAverage = calcAverage(85, 54, 41)
// const koalasAverage = calcAverage(23, 34, 27)

// console.log(dolphinsAverage, koalasAverage)

// function checkWinner (dolphinsAverage, koalasAverage) {
// if (dolphinsAverage >= koalasAverage * 2){
//     console.log(`Dolphins win (${dolphinsAverage} vs ${koalasAverage})`)
// } else  if (koalasAverage >= dolphinsAverage * 2) {
//     console.log(`Koalas win (${koalasAverage} vs ${dolphinsAverage})`)
// } else {
//     console.log('No one wins')
// }
// }
// checkWinner(dolphinsAverage, koalasAverage)


// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [age1, age2, age3]
// console.log(ages)


// function calcTip (bill) {
//     if (bill >= 50 && bill <= 300) {
//         let tip = bill * 0.15
//         return tip
//     } else {
//         let tip = bill * 0.2
//         return tip;
        
//     }
// }
// calcTip(100)

// let bills = [125, 555, 44]
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)

// let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
// console.log(total)

// const jonas = {

//     firstName: 'Jonas',
//     lastName: 'Scmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true,

//     calcAge: function (){
//         this.age = 2037 - this.birthYear;
//         return this.age; 
//     },
//     getSummary: function() {
//        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver licence`
//     }
// }

// // console.log( `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
// jonas.calcAge();

// console.log(jonas.getSummary())


/* Coding Challenge #3 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter) 

Your tasks: 
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith) 
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method 
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall. 
 
GOOD LUCK 😀 
 */
  
// let mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2
//         return this.bmi;
//     }

// }



// let john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height **2
//         return this.bmi
//     }
// }

// mark.calcBMI();
// console.log(mark.bmi);

// john.calcBMI();
// console.log(john.bmi);

// console.log(mark.bmi > john.bmi ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`) : console.log(`John's BMI ${bmiJohn}) is higher than Mark's ${mark.bmi}!`))

// const jonasArray = [
//     'jonas',
//     'schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i=0; i < years.length; i++){
//     console.log(years[i])
//     ages.push(2037 - years[i])
// }
// console.log(ages)

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---------=Starting exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting exersice ${rep}!`)
//     }

// }

// let dice = Math.trunc(Math.random()*6) + 1;

// while (dice != 6){
//     console.log(`You rolled ${dice}`)
//     dice = Math.trunc(Math.random()*6) + 1;
    
    
// }

/* Coding Challenge #4 
Let's improve Steven's tip calculator even more, this time using loops! 
Your tasks: 
1. Create an array 'bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for 
loop to perform the 10 calculations! 

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 😉 

Bonus: 
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it: 
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together 
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements) 
4.3. Call the function with the 'totals' array 
 
GOOD LUCK 😀 
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


    for (let i = 0; i < bills.length; i++) {
        bills[i] >= 50 && bills[i] <= 300 ? tips.push(bills[i] * 0.15) : tips.push(bills[i] * 0.2)
        totals[i] = tips[i] + bills[i]     
    }


console.log(tips)
console.log(totals)
let sum = 0;
function calcAverage (arr) {
    
for (let i = 0; i < arr.length; i++){
    sum += arr[i]
}
return sum / arr.length
}
console.log(calcAverage(bills));
