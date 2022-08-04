const Ellie = {
    name: '엘리',
    //key //value
    age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정될 때
Ellie.name;
Ellie.age;

// // 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
// function getValue(obj, key){
//     return obj[key]; //매개변수
//     console.log(obj[key]);
//     // return obj.key; //undefined
// }

// getValue(Ellie, 'job')
// // console.log(getValue(Ellie, 'job'));


// const person = {
//     job: 'engineer',
//     age: 25,
// }

// 객체에 추가
function addKey(obj, key, value){
    obj[key] = value;
    obj['place'] = 'suwon';
    obj['favFood'] = 'pizza';
}

addKey(Ellie, 'job', 'laywer');
Ellie.place = 'seoul';
console.log(Ellie); 
// {
//     name: '엘리',
//     age: 20,
//     job: 'engineer',
//     place: 'suwon',
//     favFood: 'pizza'
//   }

// 삭제
// function deleteKey(obj, key){
//     delete obj[key];
// }

// deleteKey(obj, 'job');
// console.log(obj); //{ name: '엘리', age: 20 }
