// 접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
    #name; // 외부로부터 전달받은 데이터 할당
    #emoji; // 외부로부터 전달받은 데이터 할당
    #type = '과일';
    constructor (name, emoji) { 
        this.#name = name;
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name}: ${this.#emoji}`);
    };
}

const apple = new Fruit('apple', '🍎');
//apple.#name = 'orange';  //클래스 안에서 선언되어야 하므로 변경할 수 없음, #field는 외부에서 접근이 불가능함
console.log(apple); //Fruit { display: [Function: display] } 필드의 정보가 나오지 않음

