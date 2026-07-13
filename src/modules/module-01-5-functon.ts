function greet(name: string, age: number): void {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet("Alice", 30); // ✅
greet(25, "Alice"); // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// ===

function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(5, 10); // ✅ result матиме тип number
console.log("🚀 ~ result:", result);

function sum2(a: number, b: number) {
  return a + b;
}

const result2 = sum2(5, 10); // ✅ TypeScript виведе тип як number
console.log("🚀 ~ result2:", result2);

// ===

interface User {
  id: number;
  name: string;
}

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// ===

function greet2(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  } else {
    console.log(`Hello, my name is ${name}.`);
  }
}

greet2("Alice", 30); // ✅
greet2("Bob"); // ✅
greet2("Jacob", true); // ❌

// ===

// https://www.typescriptlang.org/docs/handbook/2/functions.html The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions:
type AddFunctionType = (a: number, b: number) => number;

// use: Arrow Function
const add: AddFunctionType = (x, y) => x + y;

// use: Function Expression
const add2: AddFunctionType = function (x, y) {
  return x + y;
};

// ! cant use: Function Declaration
// function add3: AddFunctionType {
//   return x + y;
// };

console.log(add(2, 3)); // 5
console.log(add2(2, 3)); // 5

// ❌ Error: Type '(x: string, y: string) => string' is not assignable to type '(a: number, b: number) => number'.
const incorrectAdd: AddFunction = (x: string, y: string) => x + y;
console.log(incorrectAdd("2", "3"));
