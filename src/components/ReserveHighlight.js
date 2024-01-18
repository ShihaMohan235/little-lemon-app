import { Link } from "react-router-dom";
import Button from "../custom-components/Button";
import '../styles/section.css';

function ReserveHighlight() {
    const btnConfig = {
        className: 'btn-primary',
        btnname: 'Reserve a Table',
        btnStyle: {marginTop: 0}
    }
    return (
        <>
            <section className="special-section-heading">
                <h2>Want to Reserve a Table?</h2>
                <Link to="/booking"><Button {...btnConfig} aria-label="Reserve a Table" /></Link>
            </section>
        </>
    )
}

export default ReserveHighlight;