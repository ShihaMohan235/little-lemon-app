import { useState } from 'react';
import '../styles/nav.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  }
    return (
      <nav>
            <ul className={ openMenu? 'is-open': 'is-closed'}>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
            <Outlet />
            <div className="hamburger-menu" onClick={toggleHamburger}>
              {
                openMenu? <CloseOutlinedIcon/>: <MenuOutlinedIcon/>
              }
            </div>
      </nav>
    );
}
  
export default Nav;