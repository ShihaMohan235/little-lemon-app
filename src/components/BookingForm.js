import { useState } from "react";
import '../styles/booking.css';
import Button from "../custom-components/Button";

function BookingForm({ availableTimes, dispatch }) {
    const [formData, setFormData] = useState({
        date: '',
        time: availableTimes[0],
        guestNumber: '1',
        occasion: 'Birthday'
    });
    const btnConfig = {
        btnClass: 'btn-primary',
        btnName: 'Make Your reservation',
        type: 'submit'
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if(name === 'date') {
            dispatch({type: 'UPDATE_TIMES', time: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can perform further actions, such as sending the form data to a server
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Reserve a Table</h3>
            <hr />
            <label htmlFor="res-date">Choose date*</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time*</label>
            <select id="res-time"
                name="time"
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
                value={formData.guestNumber}
                onChange={handleChange} />
            <label htmlFor="occasion">Occasion*</label>
            <select id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Others</option>
            </select>
            <Button {...btnConfig} />
        </form>
    )
}

export default BookingForm;