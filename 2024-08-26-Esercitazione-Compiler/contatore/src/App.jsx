import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center bg-slate-800 h-screen">
      <div className=" flex justify-between gap-4 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 max-w-xl text-slate-50">
        <input
          type="text"
          placeholder="Write here..."
          className="p-1 rounded-sm text-slate-800"
          onChange={(e) => setCount(e.target.value.length)}
        />
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
