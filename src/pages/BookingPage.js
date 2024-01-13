import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

export const initializeTimes = () => {
    return [
        '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'
    ];
};

export const newTimes = [
    '18:00 PM', '19:00 PM', '22:00 PM'
];
export const updateTimes = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return newTimes;
        case "RESET":
            return initializeTimes();
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const handleSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
    };

    return (
        <section className="booking-section">
            <div className="booking-form">
                <h3 id="form-title">Reserve a Table</h3>
                <hr />
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleSubmit} />
            </div>
        </section>
    )
}

export default BookingPage;