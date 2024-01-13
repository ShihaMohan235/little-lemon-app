import '../styles/footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className='footer-row1'>
                <div className='img-content'>
                    <img src="/assets/logo-footer.png" alt="Little Lemon Logo" className="logo-footer" />
                </div>
                <div className='footer-content'>
                    <div className='contact'>
                        <p className='footer-title'>Contact us</p>
                        <p>A350 Adam Street</p>
                        <p>New York, NY 532111 - US</p>
                    </div>
                    <div className='opening-hours'>
                        <p className='footer-title'>Operating Hours</p>
                        <p>Monday to Friday: 11:00 AM to 10 PM</p>
                        <p>Saturday and Sunday: 11:00 AM to 12 PM</p>
                    </div>
                    {/* <div className='navigation'>
                    <p className='footer-title'>Navigation</p>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div> */}
                    <div className='connect'>
                        <p className='footer-title'>Connect with US</p>
                        <div className='icon'>
                            <Link to="https://www.facebook.com" target="_blank"><FacebookOutlinedIcon /></Link>
                            <Link to="https://twitter.com" target="_blank"> <TwitterIcon /></Link>
                            <Link to="https://www.instagram.com" target="_blank">  <InstagramIcon /></Link>
                            <Link to="https://www.linkedin.com" target="_blank"> <LinkedInIcon /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-element">
                &copy; 2023, Little Lemon. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;