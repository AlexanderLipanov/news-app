import './App.css';
import Template from './components/template/template';
import FullNewsCard from './components/fullNews/fullNews';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/template' element={<Template />} />
          <Route path='/fullNews' element={<FullNewsCard />} />
        </Routes>  
      </div>
  );
}

export default App;
