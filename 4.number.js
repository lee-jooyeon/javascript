const num1 = 123;  
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반옹림하여 문자열로 전환
const num4 = 1234.12;
console.log(num4.toFixed());

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될 때는 지수표기법