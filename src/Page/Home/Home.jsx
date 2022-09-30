import { useContext } from 'react';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoTask from '../../components/TodoTask/TodoTask';
import TodoContext from '../../context/TodoContext';

function Home() {
  const { todoTask } = useContext(TodoContext);

  return (
    <div className="container h-screen w-screen flex flex-col justify-center items-center bg-neutral-900">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-3">
        <div className="w-full h-full flex flex-col items-center justify-evenly">
          <h1 className="font-bold">
            Todo
            <span className="text-green-600 font-bold">List</span>
          </h1>
          <TodoForm />
        </div>
        {/* Task */}
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          {todoTask.map((task) => (
            <TodoTask key={task.id} taskData={task} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
