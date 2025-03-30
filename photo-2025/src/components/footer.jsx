import {Outlet, Link} from "react-router-dom";
import './css/Footer.css';

function Footer() {
    return (
      <footer>
        <section className="newsletter">
          <h2>Stay Updated</h2>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
        <p>© 2025 Markael Sanders Photography. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  