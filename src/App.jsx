import { useState, useContext, createContext} from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './components//users/home'
import Login from './components/admin/login';

import './App.css'
export const UserContext = createContext();
function App() {

  return (<>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
          {/*<Route path="/admin" element={<Admin />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>

        <nav>
          <ul>
             <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/admin">Admin</Link></li> *} */}
            <li><Link to="/login">Admin</Link></li>
          </ul>
        </nav>
        <UserContext.Provider value={{isAdmin: false}}>
          <Outlet />
        </UserContext.Provider>
      </Router>

      
    </>
  )
}

export default App
