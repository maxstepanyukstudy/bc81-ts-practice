function myFunction<Type>(value: Type): Type {
  return value;
}

myFunction<string>("Hello"); // "Hello"
myFunction<number>(42); // 42

// ===

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(
  getFirstElement<number>([10, 20, 30]), // 10
);

console.log(
  getFirstElement<string>(["Alice", "Bob"]), // "Alice"
);

// TypeScript виводить як
// function getFirstElement<number>(arr: number[]): number
console.log(getFirstElement([1, 2, 3, 4, 5]));

// TypeScript виводить як
// function getFirstElement<string>(arr: string[]): string
console.log(getFirstElement(["a", "b", "c", "d"]));

// ================

interface List<T> {
  items: T[];
  getItem: (index: number) => T;
}

const numberList: List<number> = {
  items: [1, 2, 3],
  getItem(index) {
    return this.items[index];
  },
};

console.log(numberList.getItem(0));

const stringList: List<string> = {
  items: ["Alice", "Bob"],
  getItem(index) {
    return this.items[index];
  },
};

console.log(stringList.getItem(0));

// ================

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface userApi {
  id: number;
  name: string;
}

const userResponse: ApiResponse<userApi> = {
  data: {
    id: 1,
    name: "Alice",
  },
  status: 200,
};
console.log("🚀 ~ userResponse:", userResponse)

const invoiceResponse: ApiResponse<{ email: string; amount: number }> = {
  data: {
    email: "alice@mail.com",
    amount: 150,
  },
  status: 201,
};
console.log("🚀 ~ invoiceResponse:", invoiceResponse)

// ================

function getLastItem<T>(arr: T[]): T {
 return arr[arr.length - 1];
}

const lastColor = getLastItem(["red", "green", "blue"]);
console.log("🚀 ~ lastColor:", lastColor)
