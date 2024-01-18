import ReserveHighlight from "../components/ReserveHighlight";
import SpecialsCard from "../components/SpecialsCard";
import Testimonial from "../components/Testimonial";

function OrderOnline() {
    return (
        <>
            <section className="page-section">
                <h2>Order Online</h2>
            </section>
            <SpecialsCard/>
            <Testimonial />
            <ReserveHighlight />
        </>
    )
}

export default OrderOnline;