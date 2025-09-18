import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto">

      {tasks.length === 0 ? 

      ( <p className="text-gray-500 text-center">No tasks yet. Add one!</p> )
       : 
      ( tasks.map((task) => (
          <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
        ))
      )}
      
    </div>
  );
}

export default ToDoList;
