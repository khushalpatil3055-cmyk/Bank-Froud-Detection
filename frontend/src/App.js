
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Transaction from './Transaction';
import Alert from './Alert';
import Users from './Users';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
 function App() {
  return (
   

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Transactions" element={<Transaction />} />
        <Route path="/Alert" element={<Alert/>} />
        <Route path="/Users" element={<Users />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
