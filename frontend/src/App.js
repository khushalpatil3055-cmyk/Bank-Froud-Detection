
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Transaction from './Transaction';
import Alert from './Alert';
import Users from './Users';
function App() {
  return (
    <BrowserRouter>
       <div className="App d-flex flex-column min-vh-100" style={{background : " #f4f6f9cf"}}>
     <Nav/>
     <div  className="flex-grow-1">
     <Routes>
         
         <Route path='/' element={<Dashboard/>}></Route>
         <Route path='/Transaction' element={<Transaction></Transaction>}></Route>
         <Route path='/Alert' element={<Alert/>}></Route>
         <Route path='/Users' element={<Users/>}></Route>
     </Routes>
     </div>
      <Footer></Footer>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
