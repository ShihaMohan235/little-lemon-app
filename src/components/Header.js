import Nav from "./Nav";
import '../styles/header.css';
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-component">
      <Nav />
      <Link to="/">
        <img src='/assets/Logo.svg' alt='Little Lemon Logo' className="logo" />
      </Link>
      <Cart />
    </header>
  );
}

export default Header;