import Header from "./utils/Header/Header";
import Footer from "./utils/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import CustomerPage from "./Components/CustomerPage/CustomerPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cooks" element={<CustomerPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
