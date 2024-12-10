import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner page="Home" />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Banner page="About" />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Banner page="Contact" />
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
