// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(array, from, to) {
  return array.map(function (item) {
    return item === from ? to : item; //(삼항연산자)
  });
}

// arrow 함수
function replace(array, from, to) {
  return array.map(item => (item === from ? to : item));
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result); // [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
function count(array, item) {
  //값을 계속 저장할 counter value이 (for)처럼 빙글빙글 돎
  return array.reduce((counter, value) => {
    if (value === item) {
      counter++;
    }
    return counter;
  }, 0);
}

function count(array, item) {
  return array.filter(value => value === item).length;
}
// filter는 새로운 배열을 만듦

console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(array, array2) {
  return array.filter(value => array2.includes(value)).length;
}

function match(array, array2) {
  return array.filter(function (value) {
    return array2.includes(value);
  });
}

console.log(match(array, ['🍌', '🍇', '🍋', '🍊']));

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const results2 = nums
  .filter(item => item > 5)
  .reduce((avg, item, _, array) => avg + item / array.length, 0);
console.log(results2);
