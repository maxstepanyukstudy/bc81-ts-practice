const numbers: number[] = [1, 2, 3, 4];
console.log("🚀 ~ numbers:", numbers);
console.log("🚀 ~ numbers:", typeof numbers);
const names: string[] = ["Alice", "Bob", "Charlie"];
console.log("🚀 ~ names:", names);
console.log("🚀 ~ names:", typeof names);

const numbers2: Array<number> = [1, 2, 3, 4, 5];
console.log("🚀 ~ numbers2:", numbers2);
console.log("🚀 ~ numbers2:", typeof numbers2);
const names2: Array<string> = ["Alice", "Bob", "Charlie"];
console.log("🚀 ~ names2:", names2);
console.log("🚀 ~ names2:", typeof names2);

const numbers3 = [1, 2, 3, 4, 5];
console.log("🚀 ~ numbers3:", numbers3);
console.log("🚀 ~ numbers3:", typeof numbers3);
const names3 = ["Alice", "Bob", "Charlie"];
console.log("🚀 ~ names3:", names3);
console.log("🚀 ~ names3:", typeof names3);

const numbers4: number[] = [1, 2, 3];
console.log("🚀 ~ numbers4:", numbers4);

numbers4.push(4); // ✅ Можна додати число

numbers4.push("5");
// ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log("🚀 ~ numbers4:", numbers4);

// ===

const names4: string[] = ["Alice", "Bob"];

console.log(names4[5].toUpperCase());
// ❌ Error: Object is possibly 'undefined'.

// ===

// Типізація масиву об'єктів

interface User4 {
  name: string;
  age: number;
}

const users: User4[] = [
  { name: "Alice", age: 25 },
  { name: "Jacob", age: 30 },
];
console.log("🚀 ~ users:", users);

const users2: Array<User> = [
  { name: "Alice", age: 25 },
  { name: "Jacob", age: 30 },
];

users2.push({ name: "Charlie" });
// ❌ Error: Property 'age' is missing in type '{ name: string; }'.
