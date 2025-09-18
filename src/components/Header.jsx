import { useState } from "react";

function Header({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <header className="flex flex-col items-center mb-6">

      <h1 className="text-3xl font-bold mb-4 text-blue-600">To-Do List</h1>

      <form onSubmit={handleSubmit} className="flex gap-2">

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a task"
          className="px-4 py-2 w-72 rounded-xl border border-blue-300 bg-white/70 shadow-md backdrop-blur-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add
        </button>
      </form>
    </header>
  );
}

export default Header;
