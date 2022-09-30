import { useContext } from 'react';
import { IoMdTrash } from 'react-icons/io';
import TodoContext from '../../context/TodoContext';

function TodoTask(taskData) {
  const { todoTask, setTodoTask } = useContext(TodoContext);
  const { task } = taskData.taskData;

  const { id } = taskData.taskData;

  const handleRemove = () => {
    const taskFilter = todoTask.filter((tsk) => tsk.id !== id);
    setTodoTask(taskFilter);
  };

  return (
    <div className="bg-green-600 min-h-10 w-5/6 relative text-start flex items-center justify-start px-2 md:w-7/12 md:break-all">
      <p className="text-neutral-800 h-full ">{task}</p>
      <IoMdTrash
        color="black"
        className="absolute top-1 right-1 cursor-pointer hover:scale-125"
        onClick={handleRemove}
      />
    </div>
  );
}

export default TodoTask;
