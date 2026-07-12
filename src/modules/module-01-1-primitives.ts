const isOnline: boolean = false;
console.log("🚀 ~ isOnline:", isOnline);
console.log("🚀 ~ isOnline:", typeof isOnline);
const age: number = 26;
console.log("🚀 ~ age:", age);
console.log("🚀 ~ age:", age);
const weight: number = 3.14;
console.log("🚀 ~ weight:", weight);
console.log("🚀 ~ weight:", typeof weight);
const username: string = "Jacob";
console.log("🚀 ~ username:", username);
console.log("🚀 ~ username:", typeof username);
let user: null = null; // Даних про користувача ще немає
console.log("🚀 ~ user:", user);
console.log("🚀 ~ user:", typeof user);
let config: undefined; // Налаштування ще не ініціалізовані
console.log("🚀 ~ config:", config);
console.log("🚀 ~ config:", typeof config);

// ===

let age2 = 26; // TypeScript виводить тип як number
console.log("🚀 ~ age2:", age2);
console.log("🚀 ~ age2:", typeof age2);
age2 = "Jacob"; // ❌ Error: Type 'string' is not assignable to type 'number'
console.log("🚀 ~ age2:", age2);
console.log("🚀 ~ age2:", typeof age2);

let weight2 = 3.14; // TypeScript виводить тип як number
console.log("🚀 ~ weight2:", weight2);
console.log("🚀 ~ weight2:", typeof weight2);
let username2 = "Jacob"; // TypeScript виводить тип як string
console.log("🚀 ~ username2:", username2);
console.log("🚀 ~ username2:", typeof username2);
let isOnline2 = false; // TypeScript виводить тип як boolean
console.log("🚀 ~ isOnline2:", isOnline2);
console.log("🚀 ~ isOnline2:", typeof isOnline2);
isOnline2 = 5; // ❌ Error: Type 'number' is not assignable to type 'boolean'
console.log("🚀 ~ isOnline2:", isOnline2);
console.log("🚀 ~ isOnline2:", typeof isOnline2);

let user2 = null; // TypeScript виводить тип як null
console.log("🚀 ~ user2:", user2);
console.log("🚀 ~ user2:", typeof user2);
let config2 = undefined; // TypeScript виводить тип як undefined
console.log("🚀 ~ config2:", config2);
console.log("🚀 ~ config2:", typeof config2);
