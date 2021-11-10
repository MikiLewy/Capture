import React from "react";
import clock from "assets/img/clock.svg";
import diaphragm from "assets/img/diaphragm.svg";
import money from "assets/img/money.svg";
import teamwork from "assets/img/teamwork.svg";
import home2 from "assets/img/home2.png";
import { Description } from "components/HeroSection/HeroSection.styles";
import { ServicesWrapper, Cards, ImgContainer } from "./ServicesSection.styles";
import { scrollRevral } from "animation";
import { useScroll } from "hooks/useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <ServicesWrapper
      variants={scrollRevral}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Cards>
      </Description>
      <ImgContainer>
        <img src={home2} alt="" />
      </ImgContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection;
