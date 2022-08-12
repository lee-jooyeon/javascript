// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록

function replace(array, from, to) {
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++){
        if(replaced[i] === from) {
            replaced[i] = to;
        }
    }
    return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result); // [ '🍌', '🥝', '🍇', '🥝' ]

// 내가 쓴 답

function replace (array, from, to) {
    const replaced = Array.from(fruits);
    for(let i = 0; i < replaced.length; i++){
        if(replaced[i] == from){
            replaced[i] = to;
        }
    } return replaced;
}

const fruits = ['🍌', '🍓', '🍇', '🍓'];
console.log(replace(fruits,'🍓', '🥝' ));


/* ------------------------------------------------------------- */

// 퀴즈 2
// 배열과 특정한 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트 하는 함수 만들기
function count (array, item) {
    let countItem = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] === item){
            countItem++;
        }
    } return countItem;
}

console.log(count(['🍌', '🥝', '🍇', '🥝', '🥝' ], '🥝'));

// 내가 쓴 답

function count(array, item){
    let countFruits = 0; //요소를 새기 위한 카운터 변수 설정
    for(let i = 0; i < array.length; i++){
        if(array[i] == item){
            countFruits++
        }
    } return countFruits;
}

console.log(count(fruits, '🍓'));

/* ------------------------------------------------------------- */

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아, 배열1 아이템중 배열 2에 존재하는
// 아이템만 담고 있는 배열 반환

function match(array, array2){
    const array3 = [];
    for(let i = 0; i < array.length; i++){
        if(array2.includes(array[i])){
            array3.push(array[i])
        }
    }
    return array3;
}

console.log(match(array, ['🍌', '🍇', '🍋', '🍊']));

// 내가 쓴 답

function match(array, array2){
    const matched = [];
    for(let i = 0; i < array.length; i++){
        if(array2.includes(array[i])){
            matched.push(array[i]);
        }
    } return matched;
}

const fruits2 = ['🍌', '🍋', '🍇', '🍈'];
console.log(match(fruits, fruits2));

