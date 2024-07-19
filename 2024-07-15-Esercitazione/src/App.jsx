import { useEffect, useState } from "react";
import "./App.css";
import Btn from "./Components/Btn/Btn";
import TryDoubleBtn from "./Components/TryDoubleBtn/TryDoubleBtn";

function App() {
  const [inputCount, setInputCount] = useState(1);
  const [users, setUsers] = useState([]);
  const [singolUser, setSingolUser] = useState({});
  const [userLS, setUserLS] = useState(null);

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

  const handleSingolUser = async () => {
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

  const setLocalStorage = () => {
    localStorage.setItem("user", JSON.stringify(singolUser));

    const userSaved = JSON.parse(localStorage.getItem("user"));
    console.log("log in storage:", userSaved);

    setUserLS(userSaved);
  };

  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <div className="flex justify-center gap-12 items-center bg-slate-800 h-screen">
      <div className=" flex flex-wrap justify-between gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 max-w-xl text-slate-50">
        <ul>
          <label className="underline font-bold text-lg">
            {" "}
            This is the users's name list
          </label>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 max-w-xl text-slate-50">
        {
          //DIV Input
        }
        <div className="flex flex-col gap-3 items-center p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-2xl justify-center">
          <label className="underline font-bold">Users's id from 1 to 10</label>
          <input
            value={inputCount}
            type="number"
            onChange={handleInputChange}
            className="p-1 rounded-md h-8 w-16 text-center text-slate-950"
          />
        </div>
        {
          //END DIV Input
        }
        {singolUser.name && (
          <div className="flex gap-4">
            <p className="underline font-bold text-lg">{singolUser.name}</p>
            <Btn onClick={setLocalStorage}>Save</Btn>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 items-center p-4 shadow-[0_0_30px_rgba(0,0,0,0.8)] rounded-2xl justify-center text-slate-50">
        <h2 className="underline font-bold text-xl">User saved</h2>
        {userLS && (
          <ul className="text-right">
            <li className="underline font-bold">{userLS.name}</li>
            <li>
              {userLS.username}
              <span className="underline"> :Username</span>
            </li>
            <li>
              {userLS.email} <span className="underline"> :E-mail</span>
            </li>
            <li>
              {userLS.website} <span className="underline"> :Website</span>
            </li>
          </ul>
        )}
      </div>
      <TryDoubleBtn></TryDoubleBtn>
    </div>
  );
}

export default App;
