import { Link, NavLink, withRouter } from "react-router-dom";
import "./Navigation.css";
import {FiLogIn} from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
import { useCart } from "../../providers/CartProvider";
import { useAuth } from "../../providers/AuthProvider";
//
function Navigation() {
  const isAuth=useAuth();
  const {cart}=useCart();
  return (
    <header>
      <div className="logo">  <Link to="/">لاروخا</Link> </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" activeClassName="active-link">
              منو
            </NavLink>
          </li>

          <li>
            <a href="#aboutus" >
              درباره ما
            </a>
          </li>
          <li>
            <a href="#aboutus" >
              تماس با ما
            </a>
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <div className="badge-content">
          <span>{cart.length}</span>
          <Link to="/cart">
            <ImCart />
          </Link>
        </div>
        <div>
          <Link to={isAuth? "/profile" : "/signup"}>
            {isAuth? <FaUserAlt /> : <FiLogIn/> }  
          </Link>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
