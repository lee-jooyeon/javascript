// 동등 비교 관계 연산자 (Equality operators)

// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

const obj1 = {
    name: 'js',
}

const obj2 = {
    name: 'js',
}

console.log(obj1 == obj2); //키와 값이 같지만 서로 다른 메모리주소를 가지고 있음으로 false
console.log(obj1.name == obj2.name); //true

let obj3 = obj2;
console.log(obj3 == obj2); //true
console.log(obj3 === obj2); //true
