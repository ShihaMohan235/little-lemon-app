import Nav from "./Nav";
import '../styles/header.css';
import Cart from "./Cart";

function Header() {
    return (
      <header className="header-component">
        <Nav/>
        <img src='/assets/Logo.svg' alt='Little Lemon Logo' className="logo"/>
        <Cart/>
      </header>
    );
}
  
export default Header;