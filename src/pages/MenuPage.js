import ReserveHighlight from "../components/ReserveHighlight";
import SpecialsCard from "../components/SpecialsCard";
import Testimonial from "../components/Testimonial";

function MenuPage() {

    return (
        <>
            <section className="page-section">
                <h2>Our Menu</h2>
            </section>
            <SpecialsCard/>
            <Testimonial />
            <ReserveHighlight />
        </>
    )
}

export default MenuPage;