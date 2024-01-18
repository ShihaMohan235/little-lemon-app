import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderOnline from "./pages/OrderOnline";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main-grid'>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/order" element={<OrderOnline />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/booking-confirmed" element={<ConfirmedBookingPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
