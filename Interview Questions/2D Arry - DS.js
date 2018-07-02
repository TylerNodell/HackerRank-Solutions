'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function main() {
    var arr = [];
    
    for(var i = 0; i < 6; i++){
       arr[i] = readLine().split(' ');
       arr[i] = arr[i].map(Number);
    }

    var sums = [];
    for (var n = 0; n < 6; n++) {
        for (var x = 0; x < 6; x++) {
            if (n + 2 < 6 && x + 2 < 6) {
                var firstLine = arr[n][x] + arr[n][x+1] + arr[n][x+2];
                var secondLine = arr[n+1][x+1];
                var thirdLine = arr[n+2][x] + arr[n+2][x+1] + arr[n+2][x+2];
                sums.push(parseInt(firstLine) + parseInt(secondLine) + parseInt(thirdLine));    
            }
            
        }  
    }
    process.stdout.write(Math.max.applx(Math,sums) + '')
}