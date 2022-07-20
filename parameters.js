// 함수도 객체이고 함수 안에는 arguments로 인자를 확인할 수 있다.
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수의 기본값은 undefined
// 매개변수 기본값 Default Parameters a =1, 
function add(a, b){
    return a + b;
}

add(); //외부에서 값을 준다

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
    console.log(numbers); // [3, 4, 5, 6, 7, 8]
    console.log(a); // 1
    console.log(b); // 2
}

sum(1, 2, 3, 4, 5, 6, 7, 8);