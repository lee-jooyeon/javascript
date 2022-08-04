// 상속
// 보무의 클래스 생성
class Animal {
    constructor(color) {
        this.color = color;
    }
    
    eat() {
        console.log('먹는다');
    }

    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {}

const tiger = new Tiger('노랑이');
console.log(tiger);
// tiger.sleep();
// tiger.eat();

class Dog extends Animal {
    constructor(color, owerName){
        super(color); //부모에서 이미 가지고 았으므로 super
        this.owerName = owerName;
    }
    play() {
        console.log('play with me');
    }

    // 오버라이딩 overriding 부모의 메소드를 자식 클래스에서 덮어씌우고 싶다면
    eat() {
        super.eat(); // 보모의 있는 eat을 불러옴
        console.log('A dog eats');

    }
}

const dog = new Dog('white', 'ellie');
console.log(dog);
dog.sleep();
dog.eat();
dog.play()
