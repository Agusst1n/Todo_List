import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nabvar from './components/Nabvar/Nabvar';
import Home from './Page/Home/Home';
import PokeAPI from './Page/PokeAPI/PokeAPI';

function App() {
  // const { todoTask } = useContext(TodoContext);
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poke" element={<PokeAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
