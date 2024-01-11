import Chicago from "../components/Chicago";
import CallToAction from "../components/CallToAction";
import ReserveHighlight from "../components/ReserveHighlight";
import Specials from "../components/Specials";
import Testimonial from "../components/Testimonial";

function HomePage() {

    return (
        <>
            <CallToAction />
            <Specials />
            <Testimonial/>
            <ReserveHighlight/>
            <Chicago/>
        </>
    )
}

export default HomePage;