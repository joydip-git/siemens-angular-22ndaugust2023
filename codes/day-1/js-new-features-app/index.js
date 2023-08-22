class Person {
    constructor(name, id, salary) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    print() {
        return `${this.name}, ${this.id}, ${this.salary}`
    }
}
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    print = () => {
        return `${super.print()}, ${this.subject}`
    }
}
const anilPerson = new Trainer("anil", 1, 1000, 'JS')
//dot operator
console.log(anilPerson.name)
//indexer
console.log(anilPerson["salary"])
//console.log(anilPerson["print"]())
console.log(anilPerson.print())

for (const propName in anilPerson) {
    const propValue = anilPerson[propName]
    console.log(`${propName}:${propValue}`)
}

// const copyPerson = {}
// for (const propName in anilPerson) {
//     const propValue = anilPerson[propName]
//     copyPerson[propName] = propValue
// }

//spread operator (...)
const copyPerson = { ...anilPerson }
console.log(copyPerson)

//let numbers = [10, 2, 4, 3, 5, 76]
let numbers = new Array(10, 2, 4, 3, 5, 76)
for (const index in numbers) {
    const element = numbers[index]
    console.log(`${index}:${element}`)
}
for (const element of numbers) {
    console.log(element)
}

// const copyNumbers = []
// for (const element of numbers) {
//     copyNumbers.push(element)
// }
const copyNumbers = [...numbers, 100, 200]
console.log(copyNumbers)

// const nameValue = anilPerson.name
// const idValue = anilPerson.id
// const salaryValue = anilPerson.salary

//object destructuring
const { name: nameValue, salary: salaryValue } = anilPerson

console.log(nameValue)
console.log(salaryValue)

//let numbers = new Array(10, 2, 4, 3, 5, 76)
const [, x, , , y] = numbers
console.log(x, y)

const company = "siemens"
const [, s, , , f] = company
console.log(s, f)

const objects = [
    {
        name: 'anil',
        friends: ['sunil', 'mahesh']
    },
    {
        name: 'sunil',
        friends: ['anil', 'mahesh']
    },
    {
        name: 'mahesh',
        friends: ['sunil', 'anil']
    }
]
const [, { friends: [, friendName] }] = objects
console.log(friendName)

//rest operator
function calculateAverage(name, ...marks) {
    if (marks.length > 0) {
        let total = 0
        for (const value of marks) {
            total += value
        }
        return total / marks.length
    } else {
        return 0
    }
}
console.log(calculateAverage('anil', 10, 20, 30))
console.log(calculateAverage("sunil", 10, 20))
console.log(calculateAverage("mahesh", 10))
console.log(calculateAverage("joy"))

const multiply = function (a, b) {
    return a * b
}
//arrow function
const divide = (a, b) => {
    return a / b
}

const add = (a, b) => a + b

/*
let someVar = 100
function outer() {
    this.a = 10
    const ref = this
    function inner() {
        this.b = 20
        //console.log(this.a + this.b)
        console.log(ref.a + this.b + someVar)
    }
    //console.log(global)
    inner()
    //return inner

}
//const innerFnRef = outer()
//innerFnRef()

new outer()
console.log(global)
*/
/*
function outer() {
    this.a = 10
    let inner = function () {
        this.b = 20
        const res = this.a + this.b
        console.log(res)
    }
    inner = inner.bind(this)
    inner()
}
new outer()
*/
function outer() {
    this.a = 10
    let inner = () => {
        this.b = 20
        const res = this.a + this.b
        console.log(res)
    }
    //inner = inner.bind(this)
    inner()
}
new outer()


//1.
function foo() {
    this.data = 100
    // this.show = function () {
    this.show = () => {
        console.log("show...." + this.data)
    }
}
//foo() //by default foo will be bound to either "global" in Node JS or "window" in web app
//global.show()

const fooObj = new foo()//foo will be bound to a new object

fooObj.show() //show function will be bound to fooObj

const showFnRef = fooObj.show//.bind(fooObj)
showFnRef()

