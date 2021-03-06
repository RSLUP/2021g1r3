import React,{useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css';
import logo from '../Images/img-2.png'


function NavBar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const handleClick=() => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect (() =>{
        showButton()
    },[]);

    window.addEventListener('resize',showButton);

    return (
        <div>
            
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/"  className="navbar-logo" onClick={closeMobileMenu}>
                   <img src={logo}  alt='logo' width="100" height="30"/>
                          
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to='/LogIn' className='nav-links' onClick={closeMobileMenu}>
                               Log In 
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/Leaderboard' className='nav-links' onClick={closeMobileMenu}>
                                Leaderboard
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                               About Us
                           </Link>
                       </li>
                       <li>
                            <Link to='/SignUp'className='nav-links'onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
