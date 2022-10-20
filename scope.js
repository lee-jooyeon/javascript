// 코드 블럭: { }, if() {}, for () {}, function() {}
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없음 ❌
{
    const a = 'a';
    console.log(a);
}

const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없음 ❌
function print() {
    const message = 'Hello World'; // 로컬 변수
    console.log(message);
}

// 함수 외부에서는 함수의 매개변수를 참조할 수 없음 ❌
function sum(a, b) {
    console.log(a, b);
}

const text = 'global'; // 전역 변수, 글로벌 변수 (글로벌 변수, 글로벌 스코프)
{
    const text = 'inside block'; // 지역 변수, 로컬 변수 (지역 스코프, 로컬 스코프)
    {
        console.log(text);
    }
}

// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨!
const global = 1;
{
    // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸됨 (GC)
    const local = 1;
}

function print() {
    // 함수 내부에서도 블럭 안에서 필요한 경우에는
    // 필요한 곳에서 블럭 안에서 변수를 선언하고 사용해야함!
    if(true){
        let temp = 0;
    }
}