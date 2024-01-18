import { useEffect, useState } from "react";
import '../styles/booking.css';
import Button from "../custom-components/Button";

function LoginForm() {
    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    useEffect(() => {
        const isValid = (
            formData.name !== '' &&
            formData.email !== '' 
        );

        setFormValid(isValid);
    }, [formData]);

    const btnConfig = {
        className: 'btn-primary reservation-btn',
        btnname: 'Login',
        type: 'submit',
        disabled: !formValid
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        if (formValid) {
            alert('You are Logged in SuccesFully!');
            setFormData({
                name: '',
                email: '',
                mobile: ''
            });
        } else {
            console.error('Form validation failed. Please fill in all required fields.');
        }
    };

    return (
        <form onSubmit={handleSubmit} aria-labelledby="form-title">
            <label htmlFor="name">Name*</label>
            <input type="text"
                id="name"
                data-testid="name"
                name="name"
                aria-labelledby="name"
                aria-required="true"
                required
                value={formData.name}
                onChange={handleChange} />
            <label htmlFor="email">Email*</label>
            <input type="email" id="email"
                data-testid="email"
                name="email"
                value={formData.email}
                aria-labelledby="email"
                aria-required="true"
                required
                onChange={handleChange}>
            </input>
            <label htmlFor="mobile">Contact Number(optional)</label>
            <input type="tel" id="mobile"
                data-testid="mobile"
                name="mobile"
                pattern="[0-9]{10}"
                value={formData.mobile}
                aria-labelledby="mobile"
                aria-required="false"
                onChange={handleChange}
            >
            </input>
            <Button {...btnConfig} aria-label="Login" />
        </form>
    )
}

export default LoginForm;