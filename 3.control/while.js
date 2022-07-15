// while(조건){}
// 조건 false가 될 때까지 {} 코드를 반복 실행

let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}

//조건이 맞을 때만 실행 -> while
let isActive = false;
let i = 0;
while(isActive){
    console.log('Alive');
    if(i === 10){
        break;
    }
    i++;
}

//꼭 한번은 실행 -> do while
do {
    console.log('Alive');
} while(isActive);