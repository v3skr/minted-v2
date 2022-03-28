import Header from "./utils/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./utils/Footer/Footer";
import LoginPage from "./Components/LoginPage/LoginPage";
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
