import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../../context/TodoContext';

function Nabvar() {
  const { todoTask } = useContext(TodoContext);

  const taskPending = todoTask.length;
  return (
    <div className="w-screen h-10 bg-green-600 flex items-center justify-end px-6 gap-4">
      <Link
        to="/"
        className="text-slate-200 no-underlin hover:text-slate-900 relative"
      >
        Home
        <p
          className={`absolute -top-1 -right-3 bg-red-700 text-white rounded-md ${
            taskPending === 0 ? 'hidden' : 'block'
          }`}
        >
          {taskPending}
        </p>
      </Link>
      <Link
        to="/poke"
        className="text-slate-200 no-underline hover:text-slate-900 "
      >
        PokeAPI
      </Link>
    </div>
  );
}

export default Nabvar;
