let name = "apple";
let color = 'red';

const apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
console.log(apple.display);

let orange = {
    name: '오렌지',
    color: 'orange',
    display: '🍊',
}

console.log(orange.display); 

apple.name = "banana";

console.log(apple.name);

const test = {
    name: ['Effie', 'Aspyn', '과장님'],
};

test.name.map((data) => {
    console.log(data)
});