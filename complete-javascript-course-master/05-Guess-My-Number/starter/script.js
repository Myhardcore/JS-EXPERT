'use strict';
<<<<<<< HEAD
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let [a, b, c] = vegetables;
console.log(a,b,c)
=======

let btn = document.querySelector('.check'),
    guess = document.querySelector('.guess'),
    message = document.querySelector('.message'),
    number = document.querySelector('.number'),
    scoreEl = document.querySelector('.score')

    let correctNumber;
    let score;

 function gameInit() {
    correctNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    scoreEl.textContent = score;
    guess.value = '';
    document.querySelector('body').style.backgroundColor = '#333';
    message.textContent = 'Start guessing...';
    number.textContent = '?';
}
gameInit();

let highScore = 0;

 let displayText = function (msg) {
    message.textContent = msg;
 }

btn.addEventListener('click', function() {
    let value = +guess.value;
    // Validation
    if (!value || value > 20 || value < 1) {
        message.textContent = '❌ Enter valid number';
        return
    }
    if (score === 0) {
        return
    }
    // Main logic
    if (value === correctNumber) {
        message.textContent = '✅ Correct number!';
        document.querySelector('body').style.backgroundColor = '#48c774';
        number.textContent = correctNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    } else {
        message.textContent = value > correctNumber ? 'Too much' : 'Too low';
        score--;
        scoreEl.textContent = score;
        if (score < 1) {
            message.textContent = '💀 GG WP, You loose! Press Again';
            document.querySelector('body').style.backgroundColor = '#ff3860';
        }

    }
})
let againEl = document.querySelector('.again');
againEl.addEventListener('click', gameInit)
>>>>>>> 93fe4f7d5734cf34ee910273b02294fc71f57eb9
