'use strict'

//async & await
//clear style of using promise

//1. async
// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         //do network request in 10 secs...
//         resolve('ellie');
//     })
// }

async function fetchUser() {
    //do network request in 10 secs...
    return 'ellie';
} //함수 앞에 async를 쓰면 코드 블럭이 자동으로 Promise로 바뀜

const user = fetchUser(); //비동기적 처리를 하지 않으면 이후 코드는 10초 후에 실행됨
user.then(console.log)
console.log(user);

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000); //3초 기다렸다가 실행
    return '🍎';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}
// function getBanana() {
//     return delay(3000)
//     .then(()=> '🍌');
// }

async function pickFruits() {
    //이렇게 하면 getApple()에 3초, getBanana()에 3초가 걸려서 비효율적 => 서로 연관이 없기때문에 기다리는 의미 x
    // const apple = await getApple();
    // const banana = await getBanana();
    
    //개선 코드
    const applePromise = getApple(); //바로 Promise 실행
    const bananaPromise = getBanana(); //바로 Promise 실행
    //동시에 delay(3000)이 실행되니까 병렬적으로 처리 가능
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }

pickFruits().then(console.log)

//3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); //Promise 중 먼저 전달되는 것 실행
}
pickOnlyOne().then(console.log)

//Callback Hell -> Use async & await
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') || 
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000 );
        })
    }
}

const userStorage = new UserStorage();
const id =  prompt('enter your id');
const password =  prompt('enter your password');

async function userInfo() {
    const userId = await userStorage.loginUser(id, password);
    const user = await userStorage.getRoles(userId);
    return user;
}
userInfo()
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log)