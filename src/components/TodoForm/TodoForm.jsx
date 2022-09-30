import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from '../../context/TodoContext';

function TodoForm() {
  // USECONTEXT
  const { todoTask, setTodoTask } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (input === '') {
      console.log('Tnes que escribir algo');
      return;
    }
    if (input.length < 3) {
      console.log('Tarea muy corta');
      return;
    }
    e.preventDefault();
    console.log('enviado');
    setTodoTask([...todoTask, { id: uuidv4(), task: input }]);

    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 h-10 flex items-center justify-between gap-2 md:w-7/12"
    >
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="w-full h-full"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
