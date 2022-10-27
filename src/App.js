import './App.css';
import Home from './Home';
import Users from './Users';
import User from './User';
import About from './About';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

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
