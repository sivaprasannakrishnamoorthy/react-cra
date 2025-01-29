import './App.css';
import { useState } from "react";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [todos, setTodos] = useState(["Item 1", "Item 2", "Item 4"]);


  return (
    <div className="app-container">
      {todos}
      <div className='header-menu'>
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
      </div>
      {/* <Home todos={todos} setTodos={setTodos} /> */}
      {/* <About /> */}
      <BrowserRouter>
        <Routes>
          <Route  >
            <Route path="/" element={<Home todos={todos} setTodos={setTodos} />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;