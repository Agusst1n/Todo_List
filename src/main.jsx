import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PokeApiProvider } from './context/PokeApiContext';
import { TodoProvider } from './context/TodoContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <PokeApiProvider>
        <App />
      </PokeApiProvider>
    </TodoProvider>
  </React.StrictMode>
);
