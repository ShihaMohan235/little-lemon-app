import Button from "../custom-components/Button";
import '../styles/section.css';
import SpecialsCard from "./SpecialsCard";

function Specials() {
    const btnConfig = {
        btnClass: 'btn-primary',
        btnName: 'Order Online',
        btnStyle: {marginTop: 0}
    }
    return (
        <>
            <section className="special-section-heading">
                <h2 style={{paddingBottom: 0}}>This Weeks Specials!</h2>
                <Button {...btnConfig} />
            </section>
            <SpecialsCard/>
        </>
    )
}

export default Specials;