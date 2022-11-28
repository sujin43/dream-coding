'use strict';

// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];
    //join(): 배열의 요소들을 지정한 구분자를 사용해 string으로 변환
    console.log(fruits.join());
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    //split(): string -> array로 변환
    console.log(fruits.split(','));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    //reverse(): 배열 요소의 순서를 거꾸로 출력
    const result = array.reverse();
    console.log(result);
    console.log(array); //[5, 4, 3, 2, 1] -> 배열 자체를 변경
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    //slice(): 배열에서 지정한 특정 부분을 리턴
    const result = array.slice(2);
    console.log(result); //[3, 4, 5]
    console.log(array); //[1, 2, 3, 4, 5] -> 원본 배열은 수정하지 않음
    //splice()
    const result2 = array.splice(0, 2);
    console.log(result2); //[1,2] -> 삭제된 배열
    console.log(array); //[3, 4, 5] -> 원본 배열도 수정됨
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
    //map(): 배열 안의 모든 요소들에 대해 callbackFn을 호출하여서 callbackFn을 거쳐 가공된 값으로 바꿔주는 함수
    const array = students.map(stu => stu.score);
    console.log(array);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //some(): 배열 요소 중 하나라도 callbackFn의 조건을 만족하는 것이 있으면 true
    console.log(students.some(stu => stu.score < 50))
    //every(): 배열 요소 모두가 조건을 만족해야 true
    console.log(!students.every(stu => stu.score >= 50))
  }
  
  // Q9. compute students' average score
  {
    //reduce(): 배열 안의 어떤 값들의 누적값이 필요할 때 유용
    const result = students.reduce((prev, curr) => prev + curr.score, 0) / students.length
    console.log(result);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    console.log(students
      .map(stu => stu.score)
      .join()
    );
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    console.log(students
      .map(stu => stu.score)
      .sort((a, b) => a - b) // b - a 내림차순 정렬
      .join()
    );
  }