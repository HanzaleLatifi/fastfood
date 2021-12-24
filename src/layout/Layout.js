import Navigation from "../components/navigation/Navigation";
import "../../src/App.css"
function Layout({ children }) {
  return (
    <div>
      <div className="clear">44</div>
      <Navigation />
      {children}
    </div>
  );
}

export default Layout;
