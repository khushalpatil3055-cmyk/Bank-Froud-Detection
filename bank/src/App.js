
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Dashboard from './Dashboard';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Transaction from './Transaction';

function App() {
  return (
    <BrowserRouter>
       <div className="App d-flex flex-column min-vh-100" style={{background : " #f4f6f9cf"}}>
     <Nav/>
     <div  className="flex-grow-1">
     <Routes>
         
         <Route path='/' element={<Dashboard/>}></Route>
         <Route path='/Transaction' element={<Transaction></Transaction>}></Route>
         
     </Routes>
     </div>
      <Footer></Footer>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
