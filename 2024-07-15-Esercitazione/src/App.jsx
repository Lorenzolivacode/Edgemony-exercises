import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCount, setInputCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [singolUser, setSingolUser] = useState("");

  const handleInputChange = (event) => {
    setInputCount(event.target.value);
  };

  const handleUsers = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const usersList = await data.json();

      setUsers(usersList);

      console.log(usersList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingolUser = async (userId) => {};

  useEffect(() => {
    console.log(inputCount);
  }, [inputCount]);

  useEffect(() => {
    handleUsers();
  }, []);
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen">
      <div className=" flex flex-wrap gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-4 max-w-lg text-slate-50">
        <input
          value={inputCount}
          type="number"
          onChange={handleInputChange}
          className="p-1 rounded-md h-8 w-16 text-center text-slate-950"
        />
        <ul>
          <label className="underline font-bold"> Nomi Users</label>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
