class Employee {
    constructor(name, department, workPerMonth, wage){
        this.name = name;
        this.department = department;
        this.workPerMonth = workPerMonth;
        this.wage = wage;
    }
    payCalculate(){
        return this.workPerMonth * this.wage;
    }
}


class FullTimer extends Employee {
    static PAY_WAGE = 15000;
    constructor(name, department, workPerMonth){
        super(name, department, workPerMonth, FullTimer.PAY_WAGE);
    }
}

class PartTimer extends Employee {
    static PAY_WAGE = 12000;
    constructor(name, department, workPerMonth){
        super(name, department, workPerMonth, PartTimer.PAY_WAGE);
    }
}

const suzy = new FullTimer('수지', 'marketing', 140);
const anna = new PartTimer('안나', 'barista', 80);

console.log(suzy.payCalculate());
console.log(anna.payCalculate());