import { useEffect, useState } from "react";
import '../styles/booking.css';
import Button from "../custom-components/Button";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({
        date: new Date().toLocaleDateString('en-CA'),
        time: '',
        guestNumber: '1',
        occasion: 'Birthday',
        requirements: ''
    });

    useEffect(() => {
        const isValid = (
            formData.date !== '' &&
            formData.time !== '' &&
            formData.guestNumber !== '' &&
            formData.occasion !== ''
        );

        setFormValid(isValid);
    }, [formData]);

    const btnConfig = {
        btnClass: 'btn-primary reservation-btn',
        btnName: 'Make Your reservation',
        type: 'submit',
        disabled: !formValid
    }

    useEffect(() => {
        if (availableTimes.length > 0) {
            setFormData(prevData => ({
                ...prevData,
                time: availableTimes[0]
            }));
        }
    }, [availableTimes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (name === 'date') {
            dispatch({type: 'UPDATE_TIMES', date: new Date(value)});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        if (formValid) {
            onSubmit(formData);
            setFormData({
                date: new Date().toLocaleDateString('en-CA'),
                time: availableTimes[0],
                guestNumber: '1',
                occasion: 'Birthday',
                requirements: ''
            });
        } else {
            console.error('Form validation failed. Please fill in all required fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <label htmlFor="res-date">Choose date*</label>
            <input
                type="date"
                id="res-date"
                data-testid="res-date"
                name="date"
                min={new Date().toLocaleDateString('en-CA')}
                aria-labelledby="res-date"
                aria-required="true"
                required
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Choose time*</label>
            <select id="res-time"
                data-testid="res-time"
                name="time"
                aria-labelledby="res-time"
                aria-required="true"
                required
                value={formData.time}
                onChange={handleChange}>
                <option value="" disabled>Select a time*</option>
                { Array.isArray(availableTimes) && availableTimes?.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests*</label>
            <input type="number"
                placeholder="1" min="1" max="10"
                id="guests"
                data-testid="guests"
                name="guestNumber"
                aria-labelledby="guests"
                aria-required="true"
                required
                value={formData.guestNumber}
                onChange={handleChange} />
            <label htmlFor="occasion">Occasion*</label>
            <select id="occasion"
                data-testid="occasion"
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
            <label htmlFor="requirements">Special requirements(optional)</label>
            <textarea id="requirements" max="150" rows="4"
                data-testid="requirements"
                name="requirements"
                value={formData.requirements}
                aria-labelledby="requirements"
                aria-required="false"
                style={{ resize: 'none' }}
                onChange={handleChange}
            >
            </textarea>
            <Button {...btnConfig}/>
        </form>
    )
}

export default BookingForm;