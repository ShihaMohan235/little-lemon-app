import { useReducer, useState } from "react";
import BookingForm from "../components/BookingForm";

function BookingPage() {
    const initializeTimes = [
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];
    const newTimes = [
        '18:00', '19:00', '22:00'
    ];
    const updateTimes = (state, action) => {
        console.log('state', state, action)
        switch (action.type) {
            case "UPDATE_TIMES":
                return newTimes;
            default:
                return state;
        }
    };
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <section className="booking-section">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </section>
    )
}

export default BookingPage;