// 접근자 프로퍼티 (Accessor Property) 제어
class Student {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() { // 접근자 프로퍼티
        return `${this.lastname} ${this.firstname}`;
    }

    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student('수지', '김');
student.firstname = '안나';
console.log(student.firstname); // 안나
console.log(student.fullName); // 김 안나 
//student.fullName -> get 
student.fullName = '김철수';
// 값을 할당하면 set 호출 할당하고자 나는 value가 인자로

// 접근자 프로퍼티 사용하면 함수지만 즉 고정된 값이 아니라 호출한 시점에 데이터를 만들어서 리턴하기 때문에
// 속성의 값으로, 함수(특정한 일을 수행 메서드) get 키워드를 붙여주면 속성에 접근하듯이 만들 수 있다.