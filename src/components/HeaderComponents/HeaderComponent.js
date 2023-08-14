import { LOGO_URL } from "../../utils/constants";
import "./HeaderComponent.css"
const HeaderComponent = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src= {LOGO_URL} />
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default HeaderComponent;