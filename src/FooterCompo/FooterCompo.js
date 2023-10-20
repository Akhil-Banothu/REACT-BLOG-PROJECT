import { NavLink } from "react-router-dom";
import "./FooterStyle.css";


function FooterComp() {
   return (
      <footer>
         <h2 className="footer-heading">The Siren</h2>
         <div className="footer-navbar">
            <p><NavLink className="footer-link" to="/">Home</NavLink></p>
            <p><NavLink className="footer-link" to="/bollywood">Bollywood</NavLink></p>
            <p><NavLink className="footer-link" to="/technology">Technology</NavLink></p>
            <p><NavLink className="footer-link" to="/hollywood">Hollywood</NavLink></p>
            <p><NavLink className="footer-link" to="/fitness">Fitness</NavLink></p>
            <p><NavLink className="footer-link" to="/food">Food</NavLink></p>
         </div>
         <div className="personal-details"></div>
      </footer>
   );
}

export default FooterComp;