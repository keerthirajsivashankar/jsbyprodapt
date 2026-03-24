class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `ID : ${this.id} , Name : ${this.name} , Salary : ${this.salary}`;
  }

  IncreaseSalary(percentage) {
    this.salary += (this.salary * percentage) / 100;
    return this.salary;
  }
}

let db = [];
db.push(new Employee(0, "John Doe", 50000));
db.push(new Employee(1, "Jane Smith", 60000));
db.push(new Employee(2, "Alice Johnson", 55000));

db.forEach((employee) => {
  console.log(employee.getDetails());
});

//destructuring
let [emp1, emp2, emp3] = db;
console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());

let object1 = {
  name: "hello",
  id: "101",
  department: "delivery",
};

let { name, id, department } = object1;

console.log(name, id, department);
// Output: hello 101 delivery
