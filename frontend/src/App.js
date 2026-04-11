
import './App.css';

import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Admin/Dashboard';
import Transaction from './Admin/Transaction';
import Alert from './Admin/Alert';
import Users from './Admin/Users';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function Adminlayout(){
  return(
    <>
      <Nav></Nav>
      <div className='main-content' style={{backgroundColor:" #f9f9f9f4"}}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}
 function App() {
  return (
   

      <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route element={<Adminlayout />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Transactions" element={<Transaction />} />
        <Route path="/Alert" element={<Alert/>} />
        <Route path="/Users" element={<Users />} />
        </Route>
      </Routes>
  
    </BrowserRouter>
  
  );
}

export default App;
