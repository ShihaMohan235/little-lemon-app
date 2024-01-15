import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../styles/booking.css';
import { Link, useLocation } from 'react-router-dom';
import Button from "../custom-components/Button";

function ConfirmedBookingPage() {
    const location = useLocation();
    const { state } = location;
    const btnConfig = {
        btnClass: 'btn-primary',
        btnName: 'Back to Home'
    }
    return (
        <section className="booking-section">
            <div className="booking-form confirmed-booking">
                {
                    state ?
                        <>
                            <CheckCircleIcon />
                            <h3 id="form-title">Booking Confirmed!</h3>
                            <hr />
                            <p>Thank you for choosing Our restaurant!
                                Your table reservation for <b>{state?.guestNumber}</b> guest(s) on <b>{state?.date}</b> at <b>{state?.time}</b> has been successfully confirmed.</p>
                        </>
                        : <>
                            <h2>Something Went Wrong!</h2>
                            <Link to="/"><Button {...btnConfig} /></Link>
                        </>
                }
            </div>
        </section>
    )
}

export default ConfirmedBookingPage;