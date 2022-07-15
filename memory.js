function add(a, b){
    console.log(a); //1
    console.log(b); //2
    return a + b;
}

const sum = add;
//sum변수에 add 할당하면 add의 메모리주소를 그대로 할당
// => sum과 add는 동일한 함수 정의를 가리키고 있다.

// sum(1, 5);
// add(1, 2);

// console.log(sum(1, 5)); //6
console.log(add(1, 2)); //3