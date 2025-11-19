// var name = "Alice";
// var name = "Bob";
// console.log(name);

// let name = "Alice";
// let name = "Bob";
// console.log(name);

// const sum = (num,num2) => {
//     return num + num2;
// };

// const isEven = num => num % 2 == 0;
// console.log (isEven(2));
// console.log (isEven(7));

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(num => num * num);
// console.log(squares);

// const name = "Vishakha";
// const age = 20;
// console.log(`Hello, my name is ${name} and I am ${age} years old`);

// const user = "Aman";
// const points = 120;
// //const message = "Hey " + user + ", you have " + points + " points !";
// const message = `Hey ${user} , you have ${points} points.`;
// console.log(message);

// const person = {
//     firstName : "Vishakha",
//     lastName : "Shree",
//     age: 20,
//     introduce: function () {
//         console.log(`Hi my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
//     },

// };

// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();

// person.birthYear = 2025 - person.age;

// const fruits = ["apple", "banana", "kiwi","mango"];
//  const [firstFruit, , thirdFruit] = fruits;

//  const name = ["Priyanshi", "Nancy", "Vishakha","Tanya", "Bhumika"];
//  const [ ,secondName, , ,fifthName] = name;
//  console.log(secondName,fifthName);

let  count = 10;
const timer = setInterval(() => {
    console.log("hello" + count);
    count--;
    if (count >5) clearInterval(timer);

},1000);


