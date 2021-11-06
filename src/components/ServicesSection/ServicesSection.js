import React from "react";
import clock from "assets/img/clock.svg";
import diaphragm from "assets/img/diaphragm.svg";
import money from "assets/img/money.svg";
import teamwork from "assets/img/teamwork.svg";
import home2 from "assets/img/home2.png";
import {
  Description,
  ImageContainer,
} from "components/HeroSection/HeroSection.styles";
import { ServicesWrapper, Cards } from "./ServicesSection.styles";

const ServicesSection = () => {
  return (
    <ServicesWrapper>
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
      <ImageContainer>
        <img src={home2} alt="" />
      </ImageContainer>
    </ServicesWrapper>
  );
};

export default ServicesSection;
