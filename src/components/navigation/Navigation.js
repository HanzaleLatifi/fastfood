import { NavLink, withRouter } from "react-router-dom";
import "./Navigation.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { ImCart } from "react-icons/im";
function Navigation() {
  return (
    <header>
      <div className="menu">
        <AiOutlineMenu className="menu-bar" />
      </div>
      <div className="logo">لاروخا</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"  exact activeClassName="active-link">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              منو
            </NavLink>
          </li>

          <li>
            <NavLink to="/aboutus" activeClassName="active-link">
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" activeClassName="active-link">
              تماس با ما
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <span>
          <ImCart />
        </span>
        <span>
          <FaUserAlt />
        </span>
      </div>
    </header>
  );
}

export default withRouter(Navigation);
