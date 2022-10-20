// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };
if (obj1 && obj2) {
  console.log('true!'); // true
}

// 단축평가: short-circuit evaluation
let result = obj1 && obj2; // )
console.log(result); // { name: 'two' }

result = obj1 || obj2;
console.log(result); // { name: 'one' }

// 활용예
// && 조건이 truthy일 때 && 그렇다면 무언가를 해야할 경우
// || 조건이 falshy일 때 || 무언가를 해야할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없다');
  }
  animal.owner = '바뀐 주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있다');
  }
  animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🐶' }
console.log(obj2); // { name: '🐱', owner: '바뀐 주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🐶', owner: '새로운 주인!' }
console.log(obj2); // { name: '🐱', owner: '바뀐 주인!' }

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
const price = item && item.price;
console.log(price); // undefined

// 기본값을 설정
// default parameter 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}

print('Happy'); // Happy
print(); // Hello
print(undefined); // Hello
print(null); // Hello
print(0); // Hello
