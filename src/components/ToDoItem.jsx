import { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = (e) => {
    e.preventDefault();
    editTask(task.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow hover:shadow-md transition">

      {isEditing ? (
        <form onSubmit={handleEdit} className="flex gap-2 flex-1">

          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="px-2 py-1 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-green-400" />

          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition">
            Save
          </button>

        </form>

      ) : (
        <>
          <span onClick={() => toggleComplete(task.id)} className={`flex-1 cursor-pointer ${task.completed ? "line-through text-gray-500" : "text-black"}`}>
            {task.text}
          </span>
          <div className="flex gap-2">

            <button onClick={() => setIsEditing(true)} className="bg-yellow-400 text-black px-3 py-1 rounded-lg hover:bg-yellow-500 transition">
              Edit
            </button>

            <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
              Delete
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
