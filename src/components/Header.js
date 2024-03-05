import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'
export const Header = () => {
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
          <ul>

  
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>Cart</li>
            <li><button onClick={handleClick}>{btnName}</button></li>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;