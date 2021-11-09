import React from "react";
import home1 from "assets/img/home1.png";
import {
  Description,
  Hide,
  ImageContainer,
  Wrapper,
} from "./HeroSection.styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "animation";
import Wave from "components/Wave";
import { StyledLink } from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <Wrapper>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <StyledLink to="/contact" as={motion.button} variants={fade}>
          Contact us
        </StyledLink>
      </Description>
      <ImageContainer>
        <motion.img src={home1} variants={photoAnim} alt="guy with camera" />
      </ImageContainer>
      <Wave />
    </Wrapper>
  );
};

export default HeroSection;
