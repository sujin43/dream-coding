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

//Quiz!
    // Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join(' '));
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(fruits.split());
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.sort((a, b) => a - b));
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    console.log(students.find(stu => stu.score === 90));
  }
  
  // Q6. make an array of enrolled students
  {
    const array = students.filter(stu => stu.enrolled);
    console.log(array);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const array = students.map(stu => stu.score);
    console.log(array);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.log(students.some(stu => stu.score < 50))
  }
  
  // Q9. compute students' average score
  {
    const array = students.map(stu => stu.score);
    console.log(array.reduce((acc, cur) => ( acc+ cur )) / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.log(students.map(stu => stu.score).join(', '));
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    console.log(students.map(stu => stu.score).sort((a, b) => a - b).join(', '));
  }