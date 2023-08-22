/*
//function main(){
function foo() {
    //data types: boolean, string, number, object, function, undefined
    console.log(a)
    var a
    a = 10
    console.log(a)
    var personName
    personName = 'Anil'
    var isTrue
    isTrue = false
    var anilObject
    anilObject = {
        //value properties
        name: "anil kumar",
        id: 1,
        salary: 1000,
        //functional property
        print: function () {
            return `${this.name},${this.id},${this.salary}`
        }
    }
    console.log(typeof a)
    console.log(typeof personName)
    console.log(typeof isTrue)
    console.log(typeof anilObject)

    var x
    console.log(typeof x)
    console.log(x)

    var res
    res = x + 12
    console.log(typeof res)


    console.log(add(12, 13))
    //function declaration
    function add(a, b) {
        return a + b
    }
    console.log(add(12, 13))

    //console.log(subtract(12, 13))
    //function expression
    var subtract
    subtract = function (a, b) {
        return a - b
    }
    console.log(subtract(12, 13))
    console.log(typeof add)
    console.log(typeof subtract)

    //if(x)
    //if (x != undefined)
}
foo()
//}()


let m = 10
console.log(m)//10
//var m

for (let i = 0; i < 1; i++) {
    let m = 20
    //var _m
    console.log(m)//20 
}


console.log(m)//10 or 20


var y = 20
y = "joydip"

*/
function test(val) {
    let a = 10
    this.x = val
}
const first = new test(10)
const second = new test(20)
console.log(first)
console.log(second)
//console.log(global)

/*
//2. constructor function
function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
}
person.prototype.print = function () {
    return `${this.personName},${this.personId},${this.personSalary}`
}
*/
class Person {
    constructor(name, id, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print() {
        return `${this.personName},${this.personId},${this.personSalary}`
    }
}
const anilPerson = new Person("anil", 1, 1000)
console.log(anilPerson.print())

console.log(anilPerson.__proto__)
console.log(anilPerson.hasOwnProperty('print'))
console.log(Person.prototype.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))


// anilPerson.sayHello = function () {
//     console.log("hello")
// }
// console.log(anilPerson)

// anilPerson.sayHello()
// //person.prototype.print =
// console.log(person.prototype)

// const anilPerson = new person("anil", 1, 1000)
// const sunilPerson = new person("sunil", 2, 2000)
