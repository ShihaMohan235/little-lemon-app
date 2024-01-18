import { Link } from "react-router-dom";
import Button from "../custom-components/Button";
import '../styles/section.css';
import SpecialsCard from "./SpecialsCard";

function Specials() {
    const btnConfig = {
        className: 'btn-primary',
        btnname: 'Order Online',
        btnStyle: {marginTop: 0}
    }
    return (
        <>
            <section className="special-section-heading">
                <h2>This Weeks Specials!</h2>
                <Link to="/order"><Button {...btnConfig} aria-label="Order Online" /></Link>
            </section>
            <SpecialsCard/>
        </>
    )
}

export default Specials;