import { useState } from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
    const [availableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    return (
        <section className="booking-section">
            <BookingForm availableTimes={availableTimes}/>
        </section>
    )
}

export default BookingPage;