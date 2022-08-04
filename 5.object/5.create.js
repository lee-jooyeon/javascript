// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: 🍎`);
//         // console.log(`${this.name}`);
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: 🍊`);
//         // console.log(`${this.name}`);
//     },
// };

// 생성자 함수 (정해진 틀에 맞게 객체 생성)
function Fruit(name, emoji) { //1.Fruit객체를 만들어서
    this.name = name; //this 이용하면 객체 자기 자신을 가리킨다. 객체에 name 키가 만들어짐 name 키의 값을 인자로 전달된 값이 할당된다.
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    return this; //생략가능
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
