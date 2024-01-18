import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <>
        <section className="booking-section">
            <div className="booking-form">
                <h3 id="form-title">Login</h3>
                <hr />
               <LoginForm/>
            </div>
        </section>
        </>
    )
}

export default LoginPage;