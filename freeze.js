// 동결 Object.freeze 추가❌, 삭제❌, 쓰기❌, 속성 재정의
// 객체를 이용한 연산은 shallow copy 참조값복사가 된다.  
// 얕은 꽁꽁 얼림 (중첩된 객체에 대한 얕은 복사가 이어짐)

const ellie = {name: '엘리' };
const dog = {name:'와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
dog.age = '3';
console.log(dog); // 추가 삭제 변경 안됨
ellie.name = '줄리';
console.log(dog); // { name: '와우', emoji: '🐶', owner: { name: '줄리' } }

// 밀봉! Object.seal 값의 수정⭕, 추가❌, 쓰기❌, 속성 재정의❌
const cat = {};
Object.assign(cat, dog); // or const cat = { ...dog };
console.log(cat); // { name: '와우', emoji: '🐶', owner: { name: '엘리' } }
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat); // { name: '냐옹', emoji: '🐶', owner: { name: '줄리' } }
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));


// 확장 금지 preventExtensions
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false
tiger.name = '호랑이';
console.log(tiger); // { name: '호랑이' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 1;
console.log(tiger); // 확장 추가 안됨❌







