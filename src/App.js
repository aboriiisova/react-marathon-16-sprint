import './App.css';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path=':userId' element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
