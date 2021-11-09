import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import FaqSection from "../components/FaqSection/FaqSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeroSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
