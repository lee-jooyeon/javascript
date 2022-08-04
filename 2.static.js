// static 정적 프로퍼티, 메서드
class Fruit {
    static MAX_FRUITS = 4;
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
    constructor (name, emoji) { 
        this.name = name;
        this.emoji = emoji;
    }
    static makeRandomFruit (name, emoji){ 
        // 클래스 레벨의 메서드에서는(데이턱가 채워져 있지 않은 템플릿 형태) this를 참조할 수 없음
        return new Fruit(name, emoji);
    }
    //인스턴스 레벨의 메서드(함수)
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// class 레벨의 함수

const clementine = Fruit.makeRandomFruit('clementine', '🍊');
console.log(clementine);

console.log(Fruit.MAX_FRUITS);

// 인스턴스레벨의 프로퍼티 함수는 만들어진 인스턴스를 통해서 접근이 가능하다.
// apple은 Fruit 클래스의 인스턴스이다. 
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다. 
const orange = new Fruit('orange', '🍊');

// console.log(apple); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
// console.log(orange); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }
// apple.display(); // apple: 🍎
// orange.display(); // orange: 🍊