import { useState } from "react";
import '../styles/booking.css';
import Button from "../custom-components/Button";

function BookingForm({ availableTimes, dispatch }) {
    const [formData, setFormData] = useState({
        date: '',
        time: availableTimes[0],
        guestNumber: '1',
        occasion: 'Birthday',
        requirements: ''
    });
    const btnConfig = {
        btnClass: 'btn-primary reservation-btn',
        btnName: 'Make Your reservation',
        type: 'submit'
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', time: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can perform further actions, such as sending the form data to a server
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="form-title">
            <h3 id="form-title">Reserve a Table</h3>
            <hr />
            <label htmlFor="res-date">Choose date*</label>
            <input
                type="date"
                id="res-date"
                name="date"
                aria-labelledby="res-date"
                aria-required="true"
                required
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time*</label>
            <select id="res-time"
                name="time"
                aria-labelledby="res-time"
                aria-required="true"
                required
                value={formData.time}
                onChange={handleChange}>
                <option value="" disabled>Select a time*</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests*</label>
            <input type="number"
                placeholder="1" min="1" max="10"
                id="guests"
                name="guestNumber"
                aria-labelledby="guests"
                aria-required="true"
                required
                value={formData.guestNumber}
                onChange={handleChange} />
            <label htmlFor="occasion">Occasion*</label>
            <select id="occasion"
                name="occasion"
                value={formData.occasion}
                aria-labelledby="occasion"
                aria-required="true"
                required
                onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Others</option>
            </select>
            <label htmlFor="requirements">Special requirements(Optional)</label>
            <textarea id="requirements" max="150" rows="4"
                value={formData.requirements}
                aria-labelledby="requirements"
                aria-required="false"
                style={{resize: 'none'}}
                onChange={handleChange}
            >
            </textarea>
            <Button {...btnConfig} />
        </form>
    )
}

export default BookingForm;