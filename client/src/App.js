import Header from "./utils/Header/Header";
import "./app.css";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./utils/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
