// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록

// 나의 답📝
let array = ['🍌', '🍓', '🍇', '🍓'];

let result = array.map(item => {
  if (item.includes('🍓')) {
    return item.replace('🍓', '🥝');
  } else {
    return item;
  }
});

console.log(result); // [ '🍌', '🥝', '🍇', '🥝' ]

// /* ------------------------------------------------------------- */

// 퀴즈 2
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트 하는 함수 만들기

// 답📝
function count(array, item) {
  return array.reduce((count, value) => {
    if (value === item) {
      count++;
    }
    return count;
  }, 0);
}

// or

function count(array, item) {
  return array.filter(value => value === item).length;
}

console.log(count(['🍌', '🥝', '🍇', '🥝', '🥝'], '🥝'));

// /* ------------------------------------------------------------- */

// // 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템중 배열 2에 존재하는
// // 아이템만 담고 있는 배열 반환

// 나의 답📝
let arrayA = ['🍌', '🥝', '🍇'];
let arrayB = ['🍌', '🍓', '🍇', '🍓'];

let results = arrayA.filter(items => arrayB.includes(items));

console.log(result); // ['🍌', '🍇'];

// 답📝
function match(input, search) {
  return input.filter(item => search.includes(item));
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍇', '🍋', '🍊']));

// 5이상(보다 큰)의 숫자들의 평균

// 답📝
let nums = [3, 16, 5, 25, 4, 34, 21];
let result2 = nums
  .filter(num => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

console.log(result2);

// 내가 쓴 답📝
let numover5 = nums.reduce((avg, value) => {
  if (value > 5) {
    avg.push(value);
  }
  return avg;
}, []);

console.log(numover5); // 5이상(보다 큰)의 숫자들의 배열을 리턴 [ 16, 25, 34, 21 ]
