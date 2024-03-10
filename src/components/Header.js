import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useStatusCheck from '../utils/useStatusCheck';
export const Header = () => {
  const status = useStatusCheck();
  const [btnName,setbtnName] = useState("login")
  const handleClick = () => {
    console.log("clicked");
    if(btnName === "logout")
    { 
      setbtnName("login") 
    } 
    else
    {
      setbtnName("logout");
    }
  }
    return (
      <div className="header">
        <div className="res-logo">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-item">
          <ul className="nav-header">  
            <li className="nav">{status ? 'online' : 'offline' }</li>
            <li className="nav"><Link to="/">Home</Link></li>
            <li className="nav">< a href="/about">About</a></li>
            <li className="nav"><Link to="/contact">contact</Link></li>
            <li className="nav"><Link to="/grocery">Grocery</Link></li>
            <li className="nav"><Link to="/cart">Cart</Link></li>
            <li className="nav"><button onClick={handleClick}>{btnName}</button></li>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;