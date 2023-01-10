'use strict';

//Promise is a JavaScript object for asynchronous operation.
//state: pending(operation 수행 중) -> fullfilled(operation 수행 완료) or rejected(network 문제 등)
//Producer vs Consumer

//1. Producer
//When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000)
}) 
//promise를 만드는 순간 전달한 execute callback function이 바로 실행되기 때문에 
//만약 network 통신을 사용자가 요청했을 때만 해야하는 경우라면 불필요한 network 통신이 발생함. 이 점 유의해서 사용해야 함

//2. Consumer: then, catch, finally
//value: promise가 정상적으로 수행이 되어서 마지막으로 resolve 콜백 함수에서 전달된 값이 들어감
promise
    .then(value => {
        console.log(value);
    }) //then을 호출하면 promise가 return 되고
    .catch(error => {
        console.log(error);
    }) //return된 promise에 catch를 등록하는 것
    .finally(() => {
        console.log('finally')
    }) //무조건 호출되는 것

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num)); //then은 값을 바로 전달할 수도, 또 다른 Promise를 전달할 수도 있음

//4. Error Handling
const getHen = () => 
     new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
     });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//     .then(hen => getEgg(hen)) //받아오는 value를 바로 다른 함수에 전달하는 경우에는 생략 가능
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

getHen()
    .then(getEgg)
    .catch(error => {
        return '🥐';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);