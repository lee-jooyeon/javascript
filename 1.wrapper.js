// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입
// 함수를 호출하는 순간 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
// 숫자가 문자열로 변환되어 출력

const text = 'text'; // String 문자열
text.length // String 객체