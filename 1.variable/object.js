let name = "apple";
let color = 'red';

const apple = {
    name: 'apple',
    color: 'red',
    display: 'π',
};
console.log(apple.display);

let orange = {
    name: 'μ€λ μ§',
    color: 'orange',
    display: 'π',
}

console.log(orange.display); 

apple.name = "banana";

console.log(apple.name);

const test = {
    name: ['Effie', 'Aspyn', 'κ³Όμ₯λ'],
};

test.name.map((data) => {
    console.log(data)
});