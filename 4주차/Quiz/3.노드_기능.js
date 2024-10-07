/*
1. REPL

2. node

3. CommonJS

4. require

5. __filename, __dirname

6. setTimeout()

7. path
*/

/*
import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('node.js_team2'));
*/

let i=5;
setInterval(() => {
    if (i===1) {
        console.log('종료');
        process.exit();
    }
    console.log(i);
    i--;
}, 500);
