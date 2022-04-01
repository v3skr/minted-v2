import Header from "./utils/Header/Header";
import Footer from "./utils/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import CustomerPage from "./Components/CustomerPage/CustomerPage";
import CookPage from "./Components/CookPage/CookPage";
import ResetPasswordPage from "./Components/ResetPasswordPage/ResetPasswordPage";
import "./utils/master.scss";
import "./utils/_utils.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <div className={`App ${true ? "bg-dark" : "bg-light"}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cooks" element={<CustomerPage />} />
          <Route path="/cook" element={<CookPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
