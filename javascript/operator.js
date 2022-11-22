//1. String concatenation
console.log('my' + ' cat'); //my cat
console.log('1' + 2); //12
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
//counter = counter + 1
//preIncrement = counter
const postIncrement = counter++;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`)
//postIncrement = counter
//counter = counter + 1

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

//||(or), finds the first truthy value -> 제일 먼저 true인 값 출력 후 stop
console.log(`or: ${value1 || value2 || check()}`); //or: true

//&&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); //and: false
//often used to compress long if-statement
//nullableObject && nullableObject.something
// if(nullableObject !== null) {
//     nullableObject.something;
// }

//*notice!!!
//check()와 연산을 많이 하는 함수를 호출하거나 expresion을 맨 앞에 두면 X
//value 같은 단순 변수들을 빠르게 체크하고 다 false일 때 마지막에 마지못해 호출하는 게 function or expression

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

//!(not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = { name: 'ellie' }; //ref1
const ellie2 = { name: 'ellie' }; //ref2
const ellie3 = ellie1; //ref1
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

//test
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional operators: if
//if, else if, else
const name = 'ellie';
if(name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

//9. Ternary operator: ?
//conditions ? value1 : value2
console.log(name === 'ellie' ? 'yes' : 'no'); //? 연산자는 간단할 때만 쓰는게 좋고 여러 번 묶어야 하는 경우는 if or switch가 적합

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in Ts
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy,
//body code is executed
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for(let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} //O(n**2) 이러한 작성법은 CPU에 좋지 않아서 중첩 반복문은 지양

//test (break, continue)
//Q1. iterate from 0 to 10 and print only even numbers(use continue)
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) console.log(i)
    else continue;
}
//Q2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for(let i = 0; i <= 10; i++) {
    console.log(i)
    if(i === 8) break;
}