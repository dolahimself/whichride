import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Home />
      {/* <Routes>
        <Route path="/" exact component={Home} />
      </Routes> */}
      <Footer />
    </Router>
  );
};

export default App;
