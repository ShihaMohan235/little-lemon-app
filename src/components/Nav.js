import { useState } from 'react';
import '../styles/nav.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleHamburger = () => {
    setOpenMenu(!openMenu);
  }
    return (
      <nav>
            <ul className={ openMenu? 'is-open': 'is-closed'}>
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>

            <div className="hamburger-menu" onClick={toggleHamburger}>
              {
                openMenu? <CloseOutlinedIcon/>: <MenuOutlinedIcon/>
              }
            </div>
      </nav>
    );
}
  
export default Nav;