import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [inputCount, setInputCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [singolUser, setSingolUser] = useState({});

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

  const handleSingolUser = async (userId) => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${inputCount}`
      );
      const usersObj = await data.json();

      setSingolUser(usersObj);
      console.log(singolUser.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(inputCount);
  }, [inputCount]);

  useEffect(() => {
    handleUsers();
  }, []);

  useEffect(() => {
    handleSingolUser();
  }, [inputCount]);
  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen">
      <div className=" flex flex-wrap justify-between gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 max-w-xl text-slate-50">
        <div className="flex flex-col gap-3 items-center p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-2xl justify-center">
          <label className="underline font-bold">Users's id from 1 to 10</label>
          <input
            value={inputCount}
            type="number"
            onChange={handleInputChange}
            className="p-1 rounded-md h-8 w-16 text-center text-slate-950"
          />
        </div>
        {singolUser.name && (
          <ul className="text-right">
            <li className="underline font-bold text-lg">{singolUser.name}</li>
            <li>
              {singolUser.username}{" "}
              <span className="underline"> :Username</span>
            </li>
            <li>
              {singolUser.email} <span className="underline"> :E-mail</span>
            </li>
            <li>
              {singolUser.website} <span className="underline"> :Website</span>
            </li>
          </ul>
        )}
        <ul>
          <label className="underline font-bold"> Users's name</label>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
