import Chicago from "../components/Chicago";
import ReserveHighlight from "../components/ReserveHighlight";
import Testimonial from "../components/Testimonial";

function AboutPage() {

    return (
        <>
            <section className="page-section">
                <h2>About Us</h2>
            </section>
            <Chicago />
            <Testimonial />
            <ReserveHighlight />
        </>
    )
}

export default AboutPage;