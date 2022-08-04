// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 

// 클래스 class
class Fruit {
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor (name, emoji, color) { 
        this.name = name;
        this.emoji = emoji;
        this.color = color;
    }
    display () {
        console.log(`${this.emoji}: ${this.color}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다. 
const apple = new Fruit('apple', '🍎' , 'red');
// orange는 Fruit 클래스의 인스턴스이다. 
const orange = new Fruit('orange', '🍊', 'mandrin');

console.log(apple); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
console.log(orange); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }
apple.display(); // apple: 🍎
orange.display(); // orange: 🍊

