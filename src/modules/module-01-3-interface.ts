
// Оголошуємо інтерфейс користувача
interface User1 {
  name: string;
  age: number;
}

// Використовуємо інтерфейс для типізації
const poly: User1 = {
  name: "Poly",
  // // error (only) in code editor
  //   age: 25
};
console.log("🚀 ~ poly:", poly);

const jacob: User1 = {
  name: "Jacob",
  age: 36,
};
console.log("🚀 ~ jacob:", jacob);

// ===

// Опціональні (?) та readonly поля

interface User2 {
  name: string;
  age?: number; // Це поле може бути відсутнім
}

const poly2: User2 = {
  name: "Poly"
};

console.log(poly2.age); // ✅ Не буде помилки, оскільки age може бути відсутнім

const jacob2: User2 = {
  name: "Jacob",
  age: 36
};

console.log(jacob2.age);

// ===

interface User3 {
  readonly id: number; // Це поле тільки для читання
  name: string;
}

const user: User3 = {
  id: 123,
  name: "Alice"
};

user.id = 456; // ❌ Помилка: Cannot assign to 'id' because it is a read-only property.
user.name = 'bob'

console.log("🚀 ~ user:", user)