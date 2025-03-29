import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import react from 'react';
import './Components/style.css';
import Main from "./Components/Main";
import { AppProvider } from './Components/Book';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Terms from './Components/Terms';
import Book from './Components/Book';

function App() {
  return (
    <>
    <nav>
        <div className="logo-container">
        
          <h1 className="biblio">B!BL!O</h1>
          <h1 className="worm">WORM</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/loginpage">Book</Link>
          <Link to="/terms">T&C</Link>
          <Link to="/Signup">SignUp</Link>
          <Link to="/loginpage">Login</Link>
          
          
        </div>
      </nav>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Book' element={<Book/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/terms' element={<Terms/>}/>
      
     </Routes>
     <footer>
      <div className="footer-content">
        <div>
          <h3>Website Information</h3>
          <p>
            Full information about the website, services, and contact details
            will written here.
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com">Twitter</a> |
            <a href="https://instagram.com">Instagram</a> |
            <a href="https://linkedin.com">LinkedIn</a>
          </p>
        </div>
        <div>
          <h3>More</h3>
          <p>
            <a href="#privacy">Privacy Policy</a> |
            <a href="#terms">Terms of Service</a> |
            <a href="#about">About Us</a>
          </p>
        </div>
      </div>
      <p>&copy; 2024 BIBLIOWORM All rights reserved.</p>
    </footer>
    </>
  );
}

export default App;

