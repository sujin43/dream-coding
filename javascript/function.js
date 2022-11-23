//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) { body... return; }
//one function === one thing
//naming: doSomething(command, verb)
//e.g. createCardAndPoint -> createCard, createPoint(함수 이름에 두 가지 가능이 들어가 있다면 더 작은 단위로 쪼갤 수 있는지 확인해보기)
//function is object in JS!
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');

//2. Parameters
//primitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') { //parameter가 전달되지 않을 때(undefined일 때 출력될 기본 msg 지정 가능)
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) { //...args -> 배열 형태
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for(const arg of args) {
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message); //hello
        let childMessage = 'hello';
    }
    printAnother();
    // console.log(childMessage); //error
}
printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;
    //return type이 없는 함수 === return undefined
}
const result = sum(1, 2);
console.log(result);
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit (feedback)
//bad code
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic...
    }
} //조건이 일치할 때 로직 실행

//good code
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    } 
    //조건이 안 맞을 때는 빨리 return해서 함수를 종료하고
    //조건이 맞을 때만 로직 실행하도록 하는 것이 좋음
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted) (함수가 선언 되기 전에 호출해도 JS 엔진이 선언된 것을 제일 위로 올려줌)
//a function expression is created when the execution reaches it. (함수가 할당된 다음부터 호출 가능)
const print = function() { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { //printYes, printNo -> 조건에 맞으면 호출되도록 전달되는 함수(callback function)
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function() {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions(함수 안에서 자신(=함수)을 호출하는 것)
const printNo = function print() {
    console.log('no!');
    // print(); -> 피보나치 수열 계산이나 반복되는 평균값 계산 등 필요시에만 사용
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function() {
    console.log('simple Print!');
};

const arrowSimplePrint = () => console.log('simplePrint!');
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
};

//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); //함수 바로 실행