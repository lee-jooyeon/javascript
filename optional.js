// Optional Chaining Operator

// null 또는 undefined인 경우를 확인할 때
let item = { price: 1 };
const price = item?.price; // (아이템이 있다면 price에 접근)
console.log(price);

let obj = { name: '🐶', owner: { name: 'Ellie' } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}

printName();

// Nullish Coalescing Operator
// ?? null, undefined 경우에만
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''

let num = 0;
console.log(num || -1); // -1 📝: or 연산자는 0을 falshy라고 판단하여 기본값 -1을 설정한다
console.log(num ?? -1); // 0 📝: num의 값이 null or undefined이 아니라 0이기 때문에 ?? 연산자를 사용한다.

let fruit = 'orange';
fruit === 'apple' ? console.log('🍎') : console.log('🍊'); // 🍊

let emoji = fruit === 'apple' ? '🍎' : '😎';
console.log(emoji); // '😎'

