import GlobalStyles from "assets/styles/GlobalStyles";
import Nav from "components/Nav/Nav";
import ContactUs from "pages/ContactUs";
import OurWork from "pages/OurWork";
import React from "react";
import AboutUs from "pages/AboutUs";
import MovieDetail from "pages/MovieDetail/MovieDetail";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import ScrollTop from "components/ScrollTop";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/our-work/:id" element={<MovieDetail />} />
        </Routes>
        <ScrollTop />
      </AnimatePresence>
    </div>
  );
};

export default App;
