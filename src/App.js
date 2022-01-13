
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import RequiredAuth from './Pages/Booking/RequiredAuth/RequiredAuth';




function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = { <Home/>} />
        <Route path = "/home" element = { <Home/>} />
        <Route path = "/login" element = { <Login/> } />
      <Route path = "/booking/:serviceId" element = { 
        <RequiredAuth>
          <Booking/>
        </RequiredAuth>
      } />
        <Route path = "*" element = { <NotFound/> } />
      </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
