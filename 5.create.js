// const apple = {
//     name: 'apple',
//     display: function() {
//         console.log(`${this.name}: π`);
//         // console.log(`${this.name}`);
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function() {
//         console.log(`${this.name}: π`);
//         // console.log(`${this.name}`);
//     },
// };

// μμ±μ ν¨μ (μ ν΄μ§ νμ λ§κ² κ°μ²΄ μμ±)
function Fruit(name, emoji) { //1.Fruitκ°μ²΄λ₯Ό λ§λ€μ΄μ
    this.name = name; //this μ΄μ©νλ©΄ κ°μ²΄ μκΈ° μμ μ κ°λ¦¬ν¨λ€. κ°μ²΄μ name ν€κ° λ§λ€μ΄μ§ name ν€μ κ°μ μΈμλ‘ μ λ¬λ κ°μ΄ ν λΉλλ€.
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    return this; //μλ΅κ°λ₯
}

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');

console.log(apple);
console.log(orange);
