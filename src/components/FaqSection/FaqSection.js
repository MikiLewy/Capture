import React from "react";
import { FaqWrapper } from "./FaqSection.styles";

const FaqSection = () => {
  return (
    <FaqWrapper>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            nostrum id autem sapiente maiores, tempore voluptas iure, est
            delectus obcaecati expedita provident? Molestiae ab, a maiores
            tempore blanditiis voluptates cum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            nostrum id autem sapiente maiores, tempore voluptas iure, est
            delectus obcaecati expedita provident? Molestiae ab, a maiores
            tempore blanditiis voluptates cum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diffrent Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            nostrum id autem sapiente maiores, tempore voluptas iure, est
            delectus obcaecati expedita provident? Molestiae ab, a maiores
            tempore blanditiis voluptates cum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products do you offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            nostrum id autem sapiente maiores, tempore voluptas iure, est
            delectus obcaecati expedita provident? Molestiae ab, a maiores
            tempore blanditiis voluptates cum?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FaqWrapper>
  );
};

export default FaqSection;
