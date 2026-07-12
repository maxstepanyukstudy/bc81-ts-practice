// module-01-xyz-userTypes

let userId: string | number = 123;
console.log("🚀 ~ userId:", userId);
userId = "94mci";
console.log("🚀 ~ userId:", userId);
userId = false; // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
console.log("🚀 ~ userId:", userId);

let currentTheme: "light" | "dark" = "light";
console.log("🚀 ~ currentTheme:", currentTheme);
currentTheme = "dark";
console.log("🚀 ~ currentTheme:", currentTheme);
currentTheme = "blue";
// ❌ Error: Type 'blue' is not assignable to type "light" | "dark".

let status: "pending" | "shipped" | "delivered" = "pending"; // ✅
status = "shipped"; // ✅
status = "cancelled";
// ❌ Error: Type 'cancelled' is not assignable to type "pending" | "shipped" | "delivered".

interface User5 {
  id: number;
  role: "admin" | "user";
}

const poly5: User5 = {
  id: 1,
  role: "admin",
};

const jacob5: User5 = {
  id: 2,
  role: "user",
};

// =======

type Id = string | number;

let productId: Id = "45gkw8"; // ✅
console.log("🚀 ~ productId:", productId);
productId = 856; // ✅
console.log("🚀 ~ productId:", productId);
productId = false; // ❌ Error: Type 'boolean' is not assignable to type 'Id'.
console.log("🚀 ~ productId:", productId);

type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

let status2: OrderStatus = "pending"; // ✅
console.log("🚀 ~ status2:", status2);
status2 = "shipped"; // ✅
console.log("🚀 ~ status2:", status2);
status2 = "returned"; // ❌ Error: Type '"returned"' is not assignable to type 'OrderStatus'.
console.log("🚀 ~ status2:", status2);

// =========

// Базова структура HTTP-відповіді
interface HttpResponse {
  status: number;
  message: string;
}

// Специфічна відповідь для користувача
interface UserData {
  id: number;
  name: string;
  email: string;
}

interface DuplicateTest {
  test: string;
  id: number; // ok if the same name and type
}

// Поєднання базової відповіді з даними користувача
type UserResponse = HttpResponse & { data: DuplicateTest } & {
  data: UserData;
};

const response: UserResponse = {
  status: 200,
  message: "Success",
  data: {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    test: "test",
  },
};
console.log("🚀 ~ response:", response);

// =========
