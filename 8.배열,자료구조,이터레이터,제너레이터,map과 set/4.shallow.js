// 얕은 복사 Shallow Copy - 객체는 메모리 주소가 전달됨
// 자바스크립트에서 복사할 때는 항상 얕은 복사가 이루어진다.
// Array.from, concat, slice, spread(...), object.assign
const pizza = { name: '🍕', price: 2, owner: {name: 'Ellie'} };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);
console.log(store2);

pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);