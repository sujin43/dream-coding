'use strict';

//HTTP
//Hypertext(hyperlink, 리소스들, 이미지들) Transfer Protocal
//client(웹사이트, 웹 app 등)가 어떻게 server와 통신할 수 있는지를 정의한 것
//client ->(request) server
//server ->(response) server

//AJAX
//Asynchronous JavaScript And XML
//HTTP를 활용해서 서버에게 데이터를 요청해서 받아올 수 있는 방법 
//웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술
//대표적 예. XHR(XMLHttpRequest object): 브라우저 API에서 제공하는 object 중 하나

//XML
//HTML과 같은 마크업 언어로, 데이터를 표현할 수 있는 한가지 방법
//불필요한 태그가 많이 들어가 파일의 사이즈가 커질 뿐 아니라 가독성도 좋지 않아 사용 지양

//Client <-> Server
//fetch() API(ex 지원 안됨), XHR, JSON...

//JSON
//JavaScript Object Notation
//Object { key:value }
//브라우저 뿐만 아니라 모바일과 서버의 통신에도, object를 파일시스템에 저장할 때도 많이 사용
//- simplest data interchange format
//- lightweight text-based structure
//- easy to read
//- key-value pairs
//- used for serialization and transmission of data between the network the network connection
//(*serialization(직렬화): 인코딩/디코딩, 암호화/복호화처럼 서로 다른 환경에 의해 같은 값을 다르게 표현하더라도, 이를 가져와서 자신의 환경에 맞게 번역하여 이해하는 것을 의미)
//- independent programming language and platform     
//(모든 언어와 언어가 쓰여지고 있는 플랫폼에 상관 없이 대부분의 언어들이 JSON으로 serialization된 object를 그 언어의 특징에 맞게 object로 변환하고 다시 JSON으로 serialization하는 것을 지원 혹은 외부 라이브러리를 통해 가능)

//1 Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol("id"), -> JS에만 있는 특별한 데이터인 Symbol도 JSON에 포함되지 않음
    jump: function() { //함수는 object에 있는 데이터가 아니기 때문에 JSON에 포함되지 않음
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); //원하는 프로퍼티만 지정해서 출력 가능
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2. JSON to Object
//parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); //error

console.log(rabbit.birthDate.getDate());
// console.log(object.birthDate.getDate());
//error -> json에 birthDate => string, json을 object로 변환한 obj의 birthDate => string
//.getDate()를 쓰려면 object 형태여야 함

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
})

console.log(obj2.birthDate.getDate()); //1