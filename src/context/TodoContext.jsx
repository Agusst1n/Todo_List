import { useState, createContext } from 'react';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoTask, setTodoTask] = useState([]);

  return (
    <TodoContext.Provider value={{ todoTask, setTodoTask }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoProvider };

export default TodoContext;
