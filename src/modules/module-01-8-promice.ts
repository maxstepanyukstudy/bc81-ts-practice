function getData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello, TypeScript!"), 1000);
  });
}

getData().then((result) => console.log(result)); // "Hello, TypeScript!"

// ================

interface User {
  id: number;
  name: string;
}

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000);
  });
}

getUser().then((user) => console.log(user.name)); // "Alice"


// ===

const getUsers = (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]), 1000);
  });
};

getUsers().then((users) => console.log(users));
