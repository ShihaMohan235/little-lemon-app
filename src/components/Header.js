import Nav from "./Nav";
import '../styles/header.css';

function Header() {
    return (
      <header className="header-component">
        <img src='/assets/Logo.svg' alt='Little Lemon Logo' className="logo"/>
        <Nav/>
      </header>
    );
}
  
export default Header;