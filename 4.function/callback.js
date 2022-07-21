//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
                            // action 함수를 전달받음 (외부로부터 전달받은 함수를 콜백함수)
function calculator(a, b, action){// 이 상태에선 무슨 일을 할지 정의되어 있지 않음 특정한 일을 할 함수를 전달받는다
    let result = action(a, b); // 결과값은 내가 전달받은 action이라는 함수를 a,b를 전달하면서 실행
    console.log(result);
    return result; //결과값을 반환
}

//정리
//전달된 action은 콜백함수이다. 전달된 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
//그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨

calculator(2, 3, add); //호출하지 않고 add 이름만을 적어 add의 참조값을 전달한다. 호출하지 않고 함수가 가리키고 있는 주소를 전달한다.