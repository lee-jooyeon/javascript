// 배열의 함수들
// 배열 자체를 변경하는지(업데이트), 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // 클래스일 경우 static 함수 사용
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 1

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

// 추가 - 제일 뒤
fruits.push('🍋'); // 배열 자체를 수정(업데이트), 배열의 length를 리턴
console.log(fruits);

// 추가 - 제일 앞
fruits.unshift('🍈');
console.log(fruits);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 제거된 아이템을 반환
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 중간에 추가 또는 삭제
fruits.splice(1, 2);
console.log(fruits); // 배열 자체를 수정(업데이트)
fruits.splice(1, 0, '🍒'); //배열인덱스, 삭제, 추가
console.log(fruits);

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr); //  [ '🍌', '🍒' ] 잘라진 새로운 배열을 반환
console.log(fruits); // [ '🍌', '🍒', '🍑' ]
newArr = fruits.slice(-1); // 뒤에서부터
console.log(newArr); // [ '🍑' ]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
// console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
]; // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr);
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ] 기본 1단계
console.log(arr.flat(2)); //[ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(2);

// 특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3); // 배열자체를 수정 //s로 1부터 3까지 마지막은 포함 안 됨
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,s,s,0,0,0

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐔';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
