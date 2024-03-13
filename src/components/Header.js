import { useState} from 'react';
import {LOGO_URL} from '../utils/constants'
import { Link } from 'react-router-dom';
import useStatusCheck from '../utils/useStatusCheck';
import { useContext } from 'react';
import { UserContex } from '../utils/UserContex';
//importing the context created
// import { UserContex } from '../utils/UserContex';
export const Header = () => {
  const status = useStatusCheck();
  const [btnName, setbtnName] = useState("login");
  // const data = useContext(UserContex);
  const {loggedInUser} = useContext(UserContex);
  // console.log(data);
  const handleClick = () => {
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
      <div className="header-component">
        <div className="res-logo">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-item">
          <ul className="nav-header ">  
            <li className="nav">{status ? 'online' : 'offline' }</li>
            <li className="nav"><Link className="menu-card-text" to="/">Home</Link></li>
            <li className="nav"><Link  className="menu-card-text" to="/about">About</Link></li>
            <li className="nav"><Link className="menu-card-text" to="/contact">contact</Link></li>
            <li className="nav"><Link className="menu-card-text" to="/grocery">Grocery</Link></li>
            <li className="nav"><Link className="menu-card-text" to="/cart">Cart</Link></li>
            <li className="nav">{ loggedInUser }</li>
            <li className="nav"><button onClick={handleClick}>{btnName}</button></li>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;