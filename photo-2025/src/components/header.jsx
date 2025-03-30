import {Outlet, Link} from "react-router-dom";
import './css/Header.css';
import Navigation from '../components/Navigation'; // Import Navigation
import '../components/css/Navigation.css';
import Picture from '../img/header.jpg'

function Header() {
  return (
    <header>
      <img id="main-logo" src={Picture} alt="Markael Sanders Photography Logo" />
      <h1>Markael Sanders Photography</h1>

      <Navigation /> {/* Add Navigation below Header */}
    </header>
  );
}

export default Header;