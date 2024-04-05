import Navbar from './Navbar/Navbar';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Detail from './Details/Detail';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import View from './Pages/View';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path='/addEmp' element={<Add/>} />
        <Route path='/viewEmp' element={<View/>} />
        <Route path='/editEmp' element={<Edit/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
