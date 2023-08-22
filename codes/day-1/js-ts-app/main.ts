function addNumbers(a: number, b: number): number {
    return a + b
}

let a: number = 10
//let a: number = 20
const n = 20;
//m = 30;
console.log(n)
console.log(a)

//1. object-literal syntax
const anilObject = {
    //value properties
    name: "anil kumar",
    id: 1,
    salary: 1000,
    //functional property
    print: function () {
        return `${this.name},${this.id},${this.salary}`
    }
}

// //2. constructor function
// function person(name: string, id: number, salary: number) {
//     this.personName = name
//     this.personId = id
//     this.personSalary = salary
//     this.print = function () {
//         return `${this.name},${this.id},${this.salary}`
//     }
// }

// const anilPerson = new person("anil", 1, 1000)
// const sunilPerson = new person("sunil", 2, 2000)

// function test() {
//     let a = 10
//     this.x = 100
// }
// test()

// console.log(global)