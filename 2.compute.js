const obj = {
    name: '엘리',
    //key //value
    age: 20,
    job: 'lawyer',
};
// 코딩하는 시점에, 정적으로 접근이 확정될 때
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key){
    return obj[key]; //매개변수
    // return obj.key; //undefined
}

console.log(getValue(obj, 'age'));

// 객체에 추가
function addKey(obj, key, value){
    obj['place'] = 'suwon';
}

// 삭제
function deleteKey(obj, key){
    delete obj[key];
}

addKey(obj, 'job', 'engineer');
console.log(obj); //{ name: '엘리', age: 20, job: 'engineer' }

deleteKey(obj, 'job');
console.log(obj); //{ name: '엘리', age: 20 }