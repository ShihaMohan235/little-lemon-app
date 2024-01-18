import { Link } from "react-router-dom";
import Button from "../custom-components/Button";
import '../styles/section.css';

function CallToAction() {
    const btnConfig = {
        className: 'btn-primary',
        btnname: 'Reserve a Table'
    }
    return (
        <section className="hero-section">
            <article>
                <div className="content">
                    <h1>
                        Little Lemon
                    </h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><Button {...btnConfig} aria-label="Reserve a Table" /></Link>
                </div>
                <figure className="img-section">
                    <img src="/assets/restauranfood.jpg" alt="Little Lemon food" />
                </figure>
            </article>
        </section>
    )
}

export default CallToAction;