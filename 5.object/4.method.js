// 서로 연관있는 연관된 정보와 함수를 묶어서 관리할 수 있다. (속성 행동을 모아놓은 것이 객체)
const apple = {
    name: 'apple',
    display: function() {
        // console.log(`${this.name}: 🍎`);
        console.log(`${this.name}`);
    }
}

apple.display(); //apple