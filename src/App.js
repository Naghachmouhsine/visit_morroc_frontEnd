
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>    
    </div>
  );
}

export default App;
