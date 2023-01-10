'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//hoisting: var, function declaration들이 자동적으로 제일 위로 올라가는 것
//hoisting이 된 후부터, 코드가 나타나는 순서대로 실행이 됨
console.log('1');
setTimeout(() => console.log('2'), 1000)
console.log('3');

//Synchronous callback
function printImmediately(print) {
    print();
} //함수의 선언은 hoisting이 되기 때문에 제일 위로 올라감
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
} //함수의 선언은 hoisting이 되기 때문에 제일 위로 올라감
printWithDelay(() => console.log('async callback'), 2000);


//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') || 
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id =  prompt('enter your id');
const password =  prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error)
            }
        )
    },
    error => {
        console.log(error)
    }
)

//문제점
//1. 가독성이 떨어짐
//2. 로직을 한 눈에 이해하기 어려움
//3. 디버깅 어려움, 유지보수 어려움