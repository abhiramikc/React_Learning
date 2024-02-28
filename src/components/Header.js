import {LOGO_URL} from '../utils/constants'
export const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;