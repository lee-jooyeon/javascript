// spread 연산자
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest Parameters
// 함수에서 받는 인자(파라미터)가 개수가 정해져 있지 않다면 스프레드 연산자를 이용하여 배열로 리턴할 수 있다.
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍌', '🥝', '🍇'];
const fruits2 = ['🍌', '🍓', '🍇', '🍓'];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, '🌹', ...fruits2]; // spread 연산자
console.log(arr);

//Object
const ellie = { name: 'Elle', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie); // 기존 오브젝트는 변경되지 않았다.
console.log(updated);

// const fruits = ['🍏', '🥝', '🍇', '🍓'];
// const [first, second, ...others] = fruits;
// console.log(first); // 🍏
// console.log(second); // 🥝
// console.log(others); // [ '🍇', '🍓' ]

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(y); // 1
console.log(x); // 2
console.log(z); // 0

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const jennie = { name: 'Jennie', age: 27, job: 'singer' };
function display({ name, age, job }) {
  console.log(name);
  console.log(age);
  console.log(job);
}
display(jennie);

const { name, age, job } = jennie;
console.log(name);

// Quiz

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);

// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지
console.log(set.has(2)); // true

// 순회
set.forEach(item => console.log(item)); // 1 2 3
for (const value of set.values()) {
  console.log(value); // 1 2 3
}

// 추가
set.add(6);
console.log(set); // { 1, 2, 3, 6 } 중복이 불가능하다.

// 삭제
set.delete(6);
console.log(set); // { 1, 2, 3 }

// 전체 삭제
set.clear();
console.log(set); // {}

// 오브젝트 세트
const obj1 = { name: '🍓', price: 8 };
const obj2 = { name: '🍋', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // { { name: '🍓', price: 8 }, { name: '🍋', price: 5 } }

// 퀴즈
obj1.price = 10;
objs.add(obj1); // shallow 카피
console.log(obj1);
console.log(objs); // Set(2) { { name: '🍓', price: 10 }, { name: '🍋', price: 5 } }

// 퀴즈
const obj3 = { name: '🍋', price: 5 };
objs.add(obj3);
console.log(objs);
// Set(3) {
// 오브젝트는 새롭게 메모리 heap에 생성되고 메모리 참조 주소가 달라진다.
//   { name: '🍓', price: 10 }, 0X11
//   { name: '🍋', price: 5 },  0X12
//   { name: '🍋', price: 5 }   0X13
// }

// map
const map = new Map([
  ['key1', '🍓'],
  ['key2', '🍋'],
]);
console.log(map); // Map(2) { 'key1' => '🍓', 'key2' => '🍋' }2

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has('key1')); // true

// 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍓 key2 🍋
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍓', '🍋' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍓' ], [ 'key2', '🍋' ] }

// 찾기
console.log(map.get('key1')); // 🍓
console.log(map.get('key2')); // 🍋

// 추가
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍓', 'key2' => '🍋', 'key3' => '🥝' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍓', 'key2' => '🍋' }

// 전부 삭제
map.clear();
console.log(map); // Map(0) {}

// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
console.log(new Set(fruits)); //  { '🍌', '🍎', '🍇', '🍑' }
console.log([...new Set(fruits)]); // spread 연산자를 이용해서 배열로 만들어서 반환

// 함수로 만들기
function removeDuplication(array) {
  return [...new Set(array)];
}

console.log(removeDuplication(fruits));

//  ['🍌', '🍎', '🍇', '🍑']
// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
console.log(set1); // Set(5) { 1, 2, 3, 4, 5
console.log(set2); // Set(3) { 1, 2, 3 }

function findIntersection(set1, set2) {
  return new Set([...set1].filter(item => set2.has(item)));
}

console.log(findIntersection(set1, set2));

const newArray = [...set1].filter(item => [...set2].includes(item));
console.log(newArray);
console.log(new Set(newArray));
