// 1. 문자열의 모든 캐릭터를 하나씩 출력하라

const text = "Hello World!"
console.log(text.split(''));

//정답
for(let i = 0; i < text.length; i++){
    console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', '));

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자
// setInterval(() => {
//     const now = new Date();
//     const hours = now.getHours();
//     const min = now.getMinutes();
//     const seconds = now.getSeconds();
//     console.log(now.toLocaleString('ko-KR'));
//     console.log(hours, min, seconds);
// }, 1000);

