// 데이터 타입(Data Type)

// 객체 object 복합데이터 {key:value}

// 단일한 데이터를 하나씩 담을 수 있는 원시
// 메모리 셀 안에 데이터를 담고 있어 변수가 메모리를 가리키고 있다.

// 연관된 데이터를 한꺼번에 담을 수 있는 객체
// 메모리 주소를 보관하여 참조값이 메모리에 들어가 있다.


// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); //1
console.log(b); //2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name: '사과',
    color: '빨강',
};

let orange = apple;
orange.name = '오렌지';

console.log(apple); //{ name: '오렌지' }
console.log(orange); //주소값이 복사됨 { name: '오렌지' }