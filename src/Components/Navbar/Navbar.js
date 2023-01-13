import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <main className='navbar'>
          <header className='navbar_container'>
            <aside className='left_side'>
            <Link to="/" style={{textDecoration:"none", color:"#F1F1F1", fontFamily:"cursive", fontSize:"20px", letterSpacing:"1px",fontWeight:"600",}}>
               Abhishek
            </Link>
            </aside>
            <aside className='right_side'>
              <Link to="/skills" style={{textDecoration:"none", color:"#F1F1F1", fontFamily:"cursive", fontSize:"20px", letterSpacing:"1px",fontWeight:"600"}}>
                Skill
              </Link>
              <Link to="/about" style={{textDecoration:"none", color:"#F1F1F1", fontFamily:"cursive", fontSize:"20px", letterSpacing:"1px", marginLeft:"20px",fontWeight:"600"}}>
                About
              </Link>
            </aside>
          </header>
        </main>
    )
}

export default Navbar;