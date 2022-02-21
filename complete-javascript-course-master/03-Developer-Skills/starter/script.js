// Remember, we're gonna use strict mode in all scripts now!
'use strict';


let forecast = [17, 21, 23];


let printForecast = function (arr) {

    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1} days ... `
    }
    console.log('... ' + str)
}
printForecast(forecast);

