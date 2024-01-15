import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='main-grid'>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/booking-confirmed" element={<ConfirmedBookingPage />}></Route>
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
