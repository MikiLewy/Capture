import GlobalStyles from "assets/styles/GlobalStyles";
import Nav from "components/Nav/Nav";
import ContactUs from "pages/ContactUs";
import OurWork from "pages/OurWork";
import React from "react";
import AboutUs from "pages/AboutUs";
import MovieDetail from "pages/MovieDetail/MovieDetail";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/our-work/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
