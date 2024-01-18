import { useState } from 'react';
import '../styles/nav.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { NavLink, Outlet } from 'react-router-dom';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  }
    return (
      <nav>
            <ul className={ openMenu? 'is-open': 'is-closed'}>
                <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
                <li><NavLink to="/menu" activeclassname="active">Menu</NavLink></li>
                <li><NavLink to="/booking" activeclassname="active">Reservations</NavLink></li>
                <li><NavLink to="/order" activeclassname="active">Order Online</NavLink></li>
                <li><NavLink to="/login" activeclassname="active">Login</NavLink></li>
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