'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* Coding Challenge #1 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old. 
Your tasks: 
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things: 
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters) 
2. Create an array with both Julia's (corrected) and Kate's data 
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
🐶") 
4. Run the function for both test datasets 
Test data: 
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] 
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
Hints: Use tools from all lectures in this section so far 😉 
 
GOOD LUCK 😀 */


// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1,arr2) {
// arr2.slice(1,-2).concat(arr1).forEach((dog, i) => {
//   dog >= 3 ? console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`) : console.log(`Dog number ${i+1} is still a puppy🐶`)
// })

// }
// checkDogs(dogsKate, dogsJulia)


/* Coding Challenge #2 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study. 
Your tasks: 
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order: 
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4 
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old) 
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages 😉) 
4. Run the function for both test datasets 
Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4]   */



/* Coding Challenge #4 
Julia and Kate are still studying dogs, and this time they are studying if dogs are 
eating too much or too little. 
Eating too much means the dog's current food portion is larger than the 
recommended portion, and eating too little is the opposite. 
Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint). 
Your tasks: 
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg) 
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 🤓 
3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). 
4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!" 
5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false) 
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false) 
7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.) 
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects 😉) 
 
 
 
The Complete JavaScript Course 26 
Hints: 
§ Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them 😉 
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion. 
Test data: 
 
  
 
 
GOOD LUCK 😀   */


const dogs = [ 
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
  { weight: 8, curFood: 200, owners: ['Matilda'] }, 
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
  { weight: 32, curFood: 340, owners: ['Michael'] }, 
]; 

/* 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg) */

dogs.forEach(dog => dog.recommendedFood = dog.weight ** 0.75 * 28)
console.log(dogs)
console.log('2_________________________')

/* 2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 🤓  */

const sarah = dogs.find(dog => dog.owners.includes('Sarah'))
sarah.curFood > sarah.recommendedFood ? console.log('Too much food') : console.log('Feed your dog')
console.log('3______________________')
/* 3. Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). */

const ownersEatTooMuch = [];
const ownersEatTooLittle = []

dogs.forEach(dog => {
  dog.curFood > dog.recommendedFood ? ownersEatTooMuch.push(dog.owners) : ownersEatTooLittle.push(dog.owners)
})

console.log(ownersEatTooMuch)
console.log(ownersEatTooLittle)
console.log('4_________________')

/* 4. Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!"  */

const itemsMax = ownersEatTooMuch.flat().join(' and ')
console.log(`${itemsMax}'s dogs eat too much`)
const itemsMin = ownersEatTooLittle.flat().join(' and ')
console.log(`${itemsMin}'s dogs eat too little`)
console.log('5____________________')

/* 5. Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false)  */

const exactly = dogs.some((dog) => dog.curFood === dog.recommendedFood)
console.log(exactly)
console.log('6_________________')

/* 6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)  
§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion. */

dogs.forEach(dog =>console.log(dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)))

/* 7. Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.)  */

const okayDogs = [];
dogs.forEach(dog => {
  dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10) ?
  okayDogs.push(dog) : null
})


console.log(okayDogs)

/* 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects 😉) */
let dogs2 = [...dogs]
dogs2.sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(dogs2)

