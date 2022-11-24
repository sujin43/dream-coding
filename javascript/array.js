'use strict';

//비슷한 종류의 데이터를 모아 놓는 것 => 자료구조

//자료구조? object?
//object: 서로 연괸된 특징과 또는 행동들을 묶어두는 것
//자료구조: 비슷한 타입의 object들을 묶어두는 것

//JavaScript === dynamically typed language
//다양한 타입의 object들을 모아둘 수 있지만 지양하는 것이 좋음

//Array🎉

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍊', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length-1]); //배열 마지막 요소에 접근

//3. Looping over an array
//print all fruits
console.clear();
//a. for
for(let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index);
})
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('🍓', '🍑');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(0, 2); //startIndex, deleteCount
console.log(fruits);
fruits.splice(0, 2, '🍒', '🍍');
console.log(fruits);

//combine two arrays
const fruits2 = ['🍈', '🍉'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍒')); //0
console.log(fruits.indexOf('🍉')); //-1

//includes
console.log(fruits.includes('🍒')); //t
console.log(fruits.includes('🍉')); //f

//lastIndexOf
console.clear();
fruits.push('🍒');
console.log(fruits);
console.log(fruits.indexOf('🍒')); //0 -> 제일 첫번째 값 리턴
console.log(fruits.lastIndexOf('🍒')); //0 -> 제일 마지막 값 리턴