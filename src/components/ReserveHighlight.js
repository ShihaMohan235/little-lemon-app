import Button from "../custom-components/Button";
import '../styles/section.css';

function ReserveHighlight() {
    const btnConfig = {
        btnClass: 'btn-primary',
        btnName: 'Reserve a Table',
        btnStyle: {marginTop: 0}
    }
    return (
        <>
            <section className="special-section-heading">
                <h2>Want to Reserve a Table?</h2>
                <Button {...btnConfig} />
            </section>
        </>
    )
}

export default ReserveHighlight;