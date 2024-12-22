import { useEffect, useState } from "react";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // Directly use `data` as the API structure provides an array
      } catch (error) {
        console.error("Error fetching the users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl px-6 py-10">Our Users</h1>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-2 border-2 rounded-md">
            <div className="truncate font-bold">
              {user.name.firstname} {user.name.lastname}
            </div>
            <div className="text-gray-600">{user.email}</div>
            <div className="text-gray-500">{user.phone}</div>
            <div className="text-gray-700">
              {user.address.street}, {user.address.city}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
