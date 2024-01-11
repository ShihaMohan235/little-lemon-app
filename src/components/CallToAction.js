import Button from "../custom-components/Button";
import '../styles/section.css';

function CallToAction() {
    const btnConfig = {
        btnClass: 'btn-primary',
        btnName: 'Reserve a Table'
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
                <Button {...btnConfig} />
            </div>
            <div className="img-section">
                <img src="/assets/restauranfood.jpg" alt="Little Lemon food" />
            </div>
        </article>
        </section>
    )
}

export default CallToAction;