// module-01-2-objects
// todo: errors only in VScode??

const user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
console.log("🚀 ~ user:", user)
console.log("🚀 ~ user:",  typeof  user)

// ❌ Error: Type 'string' is not assignable to type 'number'
user.age = "asd";

console.log("🚀 ~ user:", user)

// ====

const user2: { name: string; age: number } = {
  name: "Alice"
};
// ❌ Error: Property 'age' is missing in type '{ name: string; }'
// but required in type '{ name: string; age: number; }'.

console.log("🚀 ~ user2:", user2)

// ====

const user3: { name: string; age: number } = {
  name: "Alice",
  age: "25" // ❌ Error: Type 'string' is not assignable to type 'number'
};
console.log("🚀 ~ user3:", user3)

console.log(user3.email);
// ❌ Error: Property 'email' does not exist on type '{ name: string; age: number; }'
