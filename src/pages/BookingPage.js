import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

export const initializeTimes = [
    '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'
];

export const updateTimes = (state, action) => {
    console.log(state, action, 'dispatcher')
    switch (action.type) {
        case "LOADING":
            return { status: "loading" };
        case "UPDATE_TIMES":
            return action.times;
        case "RESET":
            return initializeTimes
        default:
            return state;
    }
};

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    const asyncDispatch = async ({date}) => {
        dispatch({ type: "loading" });
        const data = await fetchAPI(date);
        dispatch({ type: "UPDATE_TIMES", times: data });
    };

    const handleSubmit = (formData) => {
        console.log('Form submitted with data:', formData);
        const response = submitAPI(formData);
        console.log(response, 'response')
    };

    return (
        <section className="booking-section">
            <div className="booking-form">
                <h3 id="form-title">Reserve a Table</h3>
                <hr />
                <BookingForm availableTimes={availableTimes} dispatch={asyncDispatch} onSubmit={handleSubmit} />
            </div>
        </section>
    )
}

export default BookingPage;