//1. use strict
// Javascript is very flexible === dangerous
//added ECMAScript 5
//비상식적인 코드 제한
'use strict';

//2. Variable, rw(read/write)
//- let (added in ES6)
let globalName = 'global name';
{
    let name = 'jin';
    console.log(name);
    name = 'hello!';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//- var (don't ever use this!)
//var hoisting (어디에 선언했냐에 상관 없이 항상 제일 위로 선언을 끌어 올려주는 것)
//선언 전에 호출해도 에러 나지 않음, 선언 전에 값 할당해도 에러 나지 않음
//has no block scope
{
    console.log(age); //undefined
    age = 4;
    var age;
}
console.log(age); //4

//3. Constant, r(read only)
//use const whenever possible
//only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor imutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

//4. Variable types
//primitive, single item: number, string, boolean, null, undefined, symbo -> 메모리에 바로 값이 저장됨
//object, box  container -> 변수가 가리키는 곳에는 ref 저장(실제 object가 담겨있는 메모리를 가리킴)
//function, first-class function(function도 다른 데이터 타입처럼 변수에 할당이 가능하고, 함수의 인자로도 전달이 되고, 함수에서 리턴 타입으로도 function을 return 가능)
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet (아직 chrome, firefox만 가능))
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`)

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); //type object

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); //type undefined

//symbol, create unique identifiers for objects
//고유식별자가 필요할 때 사용됨
//(간혹 string을 고유식별자로 사용하는 경우가 있는데 string은 다른 모듈이나 파일에서 동일한 string을 썼을 때 동일식별자로 간주됨)
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); //Symbol.for('') string이 똑같은 symbol 만들기
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //.description으로 string으로 변환해 출력해야함

//object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; //ellie에 할당 된 object는 바꿀 수 없지만 object 안에 속성 값은 변경 가능

//5. Dynamic typing: dynamically typed language
//JS는 선언할 때 데이터 타입을 지정하지 않고  runtime(프로그램 동작 시)에 할당된 값에 따라 타입이 변경될 수 있음
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //변수 text의 type이 runtime에 결정되기 때문에 중간에 데이터 타입이 바뀐 경우 에러 발생 주의...



