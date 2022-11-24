'use strict';

//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in JavaScript are instance of Object
//object = { key: value } - key와 value의 집합체

//1. Literals ans properties
const name  = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}

const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

const ellie = {name: 'ellie', age: 4};
function printObject(person) {
    console.log(person.name);
    console.log(person.age);
}
printObject(ellie);

//JavaScript는 runtime(프로그램이 동작하고 있을때)에 타입이 결정되는 언어
//object가 정의된 후에도 프로퍼티 추가 가능
ellie.hasJob = true; //동적인 코딩은 생각지 못한 에러가 발생할 수 있고 유지보수가 힘들기 때문에 지양하는 것이 좋음
console.log(ellie.hasJob);

//can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
//key should be always string
console.log(ellie.name); //코딩하는 순간 해당 key의 값을 받아오고 싶을 떄
console.log(ellie['name']); //실시간으로 원하는 key의 값을 받아오고 싶을 때(즉, runtime에서 결정될 때)
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    // console.log(obj.key); -> undefined
    console.log(obj[key]); //동적으로 key의 value를 받아와야 하는 상황
}
printValue(ellie, 'name');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const person4 = Person('ellie', 30);
const person4 = new Person('ellie', 30);
console.log(person4)

//4. Constructor function
//다른 기능을 하지 않고 순수하게 object를 생성하는 함수는 보통 대문자로 함수명 작성
function Person(name, age) {
    // return {
    //     name, //name: name , age: age
    //     age //key와 value명이 똑같다면 생략 가능
    // };

    //this = {};
    this.name = name;
    this.age = age;
    //return this
}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie); //t
console.log('random' in ellie); //f
console.log(ellie.random); //undefined

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (const key in ellie) {
    console.log(key);
}

//for (value of iterable) -> for..of는 obj가 아니라 배열 같은 리스트 사용
const array = [1, 2, 4, 5];
for(const value of array) {
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: 20 };
const user2 = user;
console.log(user);

//old way
const user3 = {};
for (const key in user) {
    user3[key] = user[key]
}
console.clear();
console.log(user3);

//assign
const user4 = Object.assign({}, user);
console.log(user4);
user4.name = 'jin';
console.log(user.name); //ellie
console.log(user4.name); //jin

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); //big
