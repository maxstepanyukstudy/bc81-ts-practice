import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://api.example.com/users/${userId}`,
  );
  return response.data;
};

fetchUser(1).then(console.log);

const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("https://api.example.com/users");
  return response.data;
};

fetchUsers().then(console.log);
