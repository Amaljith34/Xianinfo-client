import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import SignUp from "./component/auth/Signup";
import { Login } from "./component/auth/Login";
import Payment from "./component/payment/Payment";
import { AuthProvider } from "./context/AuthContext";
import { VideosPage } from "./pages/Video/Video";
import Footer from "./component/footer/footer";
import HomePage from "./pages/home/home";
import { ToastContainer } from "react-toastify";

export default function App() {
  
  return (
    <div>
      <ToastContainer/>
      { <Navbar />}

      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/video" element={<VideosPage />} />
        </Routes>
      </AuthProvider>

      <Footer />
    </div>
  );
}
