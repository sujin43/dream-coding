//class vs object

//class
//- template
//- declare once
//- no data in
//조금 더 연관있는 데이터(변수나 함수)를 함께 묶어 놓는 container와 같음
// class person {
//     name;
//     age; //fields
//     speak(); //methods
// };
//fields만 들어있는 class -> data class
//클래스 안에서도 내부적으로 보여지는 변수와 밖에서 보일 수 있는 변수들을 나누는 것 -> 캡슐화

//object
//클래스를 이용해 실제로 데이터를 넣어 만드는 것
//- instance of a class
//- created many times
//- data in

'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
//JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
        //this.age는 메모리에 저장된 age의 값을 가리키는 게 아니라 getter 호출
        //= age로 값을 할당할 때 setter 호출
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        //= value로 값을 할당할 때 메모리에 값을 업데이트 하는게 아니라 setter 호출
        //실행시키면 call stack size exceeded error
        //이를 방지하기 위해서는 getter와 setter에서 사용하는 변수명을 바꿔줘야 함(보통 _변수)
        // -> User라는 class 안에는 firstName, lastName, _age 총 3개의 field가 있음
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
//field는 _age이지만 .age로 사용할 수 있는 것은 내부적으로 getter와 setter가 있기 때문

//3. Fields (public, private)
//Too soon! (아직 사파리도 지원x)
class Experiment {
    publicField = 2;
    #privateField = 0; //클래스 내부에서만 값이 보여지고, 접근 가능하고, 수정 가능하지만 외부에서는 값을 읽을 수도, 변경할 수도 없음
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //undefined

//4. Static properties and methods
//Too soon!
//클래스 안의 fields와 methods은 새로운 object를 만들 때마다 그대로 복제되어서 값만 지정된 값으로 변경되어 만들어짐
//간혹 데이터에 상관 없이 class가 가진 고유의 값과 이런 데이터에 상관 없이 동일하게 반복적으로 사용되는 method가 있을 수 있음
//그런 것들에 static을 붙이면 object에 상관 없이 class 자체에 연결되어 있음
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
console.log(Article.publisher);
Article.printPublisher();
//!입력되는 데이터에 상관 없이 공통적으로 class에서 쓸 수 있는 거라면 static을 사용할 때 메모리 사용을 줄일 수 있음


//동그라미, 세모, 네모를 그리는 웹 어플리케이션을 만든다고 가정.
//이것들을 class로 정의할 때 어떻게 할 수 있을까?
//- 도형들은 width, height, color...등의 속성으로 나타낼 수 있음
//- 공통적으로 색칠할 수 있는 등의 메소드를 가질 수 있음
//각 도형은 공통적으로 너비와 높이를 가지는데 이것들을 각각 따로 만들어 동일한 것을 계속 반복하는 것보다
//shape라는 공통점으로 한 번에 정의한 후 공통적으로 사용되는 속성을 재사용하면 간편할 것임
//장점 - 간결한 코드 및 재사용성, 유지보수 용이

//5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    //다양성
    //overriding
    draw() {
        super.draw(); //부모 메소드도 호출 가능
        console.log('⚠')
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //rectangle object가 Rectangle class의 instance인지(ectangle class를 이용해 만들어졌는지) 여부 판단
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); //JS에서 만든 모든 object, class들은 Object를 상속받은 것 -> 공통 메소드 사용 가능(overriding도 가능)

//*JavaStcipt reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference