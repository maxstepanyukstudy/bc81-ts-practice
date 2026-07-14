interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = (await response.json()) as User;
  return data;
};

fetchUser(1).then(console.log);

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://api.example.com/users");
  const data = (await response.json()) as User[];
  return data;
};

fetchUsers().then(console.log);
