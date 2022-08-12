// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기
// 단, 주어진 배열을 수정하지 않도록

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

function count(array, item){
    let countFruits = 0; //요소를 새기 위한 카운터 변수 설정
    for(let i = 0; i < array.length; i++){
        if(array[i] == item){
            countFruits++
        }
    } return countFruits;
}

console.log(count(fruits, '🍓'));


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
